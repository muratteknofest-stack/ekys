const fs = require('fs');

const rawText = fs.readFileSync('Ekys-extracted.txt', 'utf8');
const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);

// We want to chunk the text into 5 main topics based on the index:
// 1. Genel Kültür
// 2. Atatürk İlkeleri ve İnkılap Tarihi
// 3. Eğitim Bilimleri
// 4. Türkiye Yüzyılı Maarif Modeli
// 5. Mevzuat

const topics = [
    { id: 'genel-kultur', title: 'Genel Kültür', match: (l) => l === 'GENEL KÜLTÜR', content: [] },
    { id: 'inkilap', title: 'Atatürk İlkeleri ve İnkılap Tarihi', match: (l) => l.includes('ATATÜRK İLKELERİ') && l.includes('İNKILAP'), content: [] },
    { id: 'egitim', title: 'Eğitim Bilimleri', match: (l) => l === 'EĞİTİM BİLİMLERİ' || l.includes('C. Eğitim Bilimleri'), content: [] },
    { id: 'maarif', title: 'Türkiye Yüzyılı Maarif Modeli', match: (l) => l.includes('TÜRKİYE YÜZYILI MAARİF MODELİ') || l.includes('Türkiye Yüzyılı Maarif Modeli'), content: [] },
    { id: 'mevzuat', title: 'Mevzuat', match: (l) => l === 'MEVZUAT' || l === 'D. Mevzuat', content: [] }
];

let currentTopicIndex = -1;

// Basic cleanup rules to skip page headers/footers
const isJunkLine = (line) => {
    return line.match(/^[0-9]+$/) || // Just a page number
        line.includes('TÜRK EĞİTİM-SEN') ||
        line.includes('www.turkegitimsen.org.tr');
};

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (isJunkLine(line)) continue;

    // Check if we hit ANY new topic boundary, but ONLY after the table of contents.
    if (i > 65) {
        let matchedIndex = -1;
        for (let t = 0; t < topics.length; t++) {
            // Avoid matching the TOC lines (which have ......... )
            if (topics[t].match(line) && !line.includes('.....')) {
                matchedIndex = t;
                break;
            }
        }

        if (matchedIndex !== -1) {
            currentTopicIndex = matchedIndex;
            continue; // don't push the title line itself
        }
    }

    if (currentTopicIndex !== -1) {
        topics[currentTopicIndex].content.push(line);
    }
}

// Now we format the gathered lines into paragraphs
const formattedData = topics.map(t => {
    // Join lines, and then split by double newline to create crude paragraphs
    const combinedText = t.content.join(' ');

    // We can try to format headers. Usually headers are short sentences that don't end with a period.
    const chunks = [];
    let currentChunk = "";

    const sentences = combinedText.split(/(?<=[.!?])\s+/);

    // chunking roughly every 5-6 sentences to create bite-sized learning cards
    let sentenceCount = 0;
    for (const sentence of sentences) {
        currentChunk += sentence + " ";
        sentenceCount++;
        if (sentenceCount >= 5) {
            chunks.push(currentChunk.trim());
            currentChunk = "";
            sentenceCount = 0;
        }
    }
    if (currentChunk.trim().length > 0) chunks.push(currentChunk.trim());

    return {
        id: t.id,
        title: t.title,
        cards: chunks
    };
});

// Save to disk
fs.writeFileSync('./src/data/ekys-notes.ts',
    `export interface StudySubject {
  id: string;
  title: string;
  cards: string[];
}

export const studyNotes: StudySubject[] = ${JSON.stringify(formattedData, null, 2)};
`);

console.log("Parsing complete. Saved to src/data/ekys-notes.ts");
