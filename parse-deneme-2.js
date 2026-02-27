const fs = require('fs');

const text = fs.readFileSync('raw-deneme-2.txt', 'utf-8');

// Parse answers
const answerMap = {};
const answerMatches = text.matchAll(/(\d+)\.([A-E])/g);
for (const match of answerMatches) {
    const qNum = parseInt(match[1], 10);
    const ansIdx = ['A', 'B', 'C', 'D', 'E'].indexOf(match[2]);
    answerMap[qNum] = ansIdx;
}

const questions = [];

let cleanText = text.substring(text.indexOf('\n1. '));
cleanText = cleanText.substring(0, cleanText.indexOf('Spoyler:') !== -1 ? cleanText.indexOf('Spoyler:') : cleanText.length);

const blocks = cleanText.split(/\n(?=\d+\.\s+)/);

for (let block of blocks) {
    block = block.trim();
    if (!block) continue;

    const qMatch = block.match(/^(\d+)\.\s+([\s\S]*?)(?=A\))/);
    if (!qMatch) continue;

    const qNum = parseInt(qMatch[1], 10);
    let questionText = qMatch[2].replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();

    let optA = block.match(/A\)\s*([\s\S]*?)(?=B\))/)?.[1]?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    let optB = block.match(/B\)\s*([\s\S]*?)(?=C\))/)?.[1]?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    let optC = block.match(/C\)\s*([\s\S]*?)(?=D\))/)?.[1]?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    let optD = block.match(/D\)\s*([\s\S]*?)(?=E\))/)?.[1]?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();

    let rawE = block.match(/E\)\s*([\s\S]*?)$/)?.[1];
    let optE = '';
    if (rawE) {
        rawE = rawE.split(/\n\s*[XIVI]+\.\s+/)[0];
        optE = rawE.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    }

    if (questionText && optA && optB && optC && optD && optE) {
        let category = "Ekstra Deneme";
        if (qNum <= 16) category = "Genel Kültür";
        else if (qNum <= 28) category = "Atatürk İlkeleri ve İnkılap Tarihi";
        else if (qNum <= 40) category = "Eğitim Bilimleri";
        else if (qNum <= 64) category = "Türkiye Yüzyılı Maarif Modeli";
        else category = "Mevzuat";

        questions.push({
            id: `ekstra-${qNum}`,
            category: category,
            question: questionText,
            options: [optA, optB, optC, optD, optE],
            correctAnswer: answerMap[qNum] !== undefined ? answerMap[qNum] : 0
        });
    } else {
        console.log('Failed:', qNum, { optA, optB, optC, optD, optE });
    }
}

const outContent = `import { Question } from './mock-questions';

export const ekstraDenemeQuestions: Question[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync('src/data/ekstra-deneme-1.ts', outContent, 'utf-8');
console.log('Extracted ' + questions.length + ' questions.');
