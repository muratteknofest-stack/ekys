const fs = require('fs');

const text = fs.readFileSync('raw-deneme-3.txt', 'utf-8');

// Parse answers
const answerMap = {};
const answerMatches = text.matchAll(/(\d+)-([A-E])/g);
for (const match of answerMatches) {
    const qNum = parseInt(match[1], 10);
    const ansIdx = ['A', 'B', 'C', 'D', 'E'].indexOf(match[2]);
    answerMap[qNum] = ansIdx;
}

const questions = [];

let cleanText = text.substring(text.indexOf('\n1) '));
cleanText = cleanText.substring(0, cleanText.indexOf('Spoyler:') !== -1 ? cleanText.indexOf('Spoyler:') : cleanText.length);

const blocks = cleanText.split(/\n(?=\d+\)\s+)/);

for (let block of blocks) {
    block = block.trim();
    if (!block) continue;

    // Note: This matches "1)" instead of "1." based on input raw format
    const qMatch = block.match(/^(\d+)\)\s+([\s\S]*?)(?=A\))/);
    if (!qMatch) continue;

    const qNum = parseInt(qMatch[1], 10);
    let questionText = qMatch[2].replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();

    let optA = block.match(/A\)\s*([\s\S]*?)(?=B\))/)?.[1]?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    let optB = block.match(/B\)\s*([\s\S]*?)(?=C\))/)?.[1]?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    let optC = block.match(/C\)\s*([\s\S]*?)(?=D\))/)?.[1]?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    let optD = block.match(/D\)\s*([\s\S]*?)(?=E\)|$|\n\d+\))/)?.[1]?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();

    let rawE = block.match(/E\)\s*([\s\S]*?)$/)?.[1];
    let optE = '';
    if (rawE) {
        rawE = rawE.split(/\n\s*[XIVI]+\.\s+/)[0];
        rawE = rawE.split(/\nBölüm/)[0];
        optE = rawE.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    }

    // Eğer E şıkkı hiç yoksa 4 şıklı varsayılıp E'ye boş bırakılabilir 
    // veya D'nin match'ini değiştirmemiz gerekebilir, ama mevcut sınavda hep 4 şık (A,B,C,D) var gibi.
    // In raw-deneme-3: Most questions only have A, B, C, D.
    // We will adjust array based on found options.

    const options = [optA, optB, optC, optD];
    if (optE) options.push(optE);

    if (questionText && optA && optB && optC && optD) {
        let category = "Ekstra Deneme 2";
        if (qNum <= 24) category = "Türkiye Yüzyılı Maarif Modeli";
        else if (qNum <= 40) category = "Genel Kültür";
        else if (qNum <= 56) category = "Mevzuat";
        else if (qNum <= 68) category = "Atatürk İlkeleri ve İnkılap Tarihi";
        else category = "Eğitim Bilimleri";

        questions.push({
            id: `ekstra2-${qNum}`,
            category: category,
            question: questionText,
            options: options,
            correctAnswer: answerMap[qNum] !== undefined ? answerMap[qNum] : 0
        });
    } else {
        console.log('Failed:', qNum, { optA, optB, optC, optD, optE });
    }
}

const outContent = `import { Question } from './mock-questions';

export const ekstraDeneme2Questions: Question[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync('src/data/ekstra-deneme-2.ts', outContent, 'utf-8');
console.log('Extracted ' + questions.length + ' questions.');
