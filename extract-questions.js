const fs = require('fs');

const text = fs.readFileSync('out.txt', 'utf-8');

const questions = [];
const blocks = text.split(/\n(?=\d+\.\s+)/);

for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];

    if (!block.includes('A)') || !block.includes('B)') || !block.includes('C)') || !block.includes('D)') || !block.includes('E)')) {
        continue;
    }

    try {
        const qMatch = block.match(/^\d+\.\s+([\s\S]*?)(?=A\))/);
        if (!qMatch) continue;

        let questionText = qMatch[1].replace(/\n/g, ' ').replace(/\s+/g, ' ').replace(/- /g, '').trim();

        let optA = block.match(/A\)\s+([\s\S]*?)(?=B\))/)?.[1]?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
        let optB = block.match(/B\)\s+([\s\S]*?)(?=C\))/)?.[1]?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
        let optC = block.match(/C\)\s+([\s\S]*?)(?=D\))/)?.[1]?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
        let optD = block.match(/D\)\s+([\s\S]*?)(?=E\))/)?.[1]?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
        let optE = block.match(/E\)\s+([\s\S]*?)(?=\n\d+\.|\nDATA|\n----------------|$)/)?.[1]?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();

        if (questionText && optA && optB && optC && optD && optE) {
            questions.push({
                id: `pdf-${questions.length + 1000}`,
                category: "Özel PDF Denemesi",
                question: questionText,
                options: [optA, optB, optC, optD, optE],
                correctAnswer: 0
            });
        }
    } catch (e) { }
}

const outContent = `import { Question } from './mock-questions';

export const pdfDenemeQuestions: Question[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync('src/data/pdf-deneme.ts', outContent, 'utf-8');
console.log('Extracted ' + questions.length + ' questions.');
