const fs = require('fs');

const rawText = fs.readFileSync('Ekys-extracted.txt', 'utf8');
const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);

// Let's do a simple fuzzy search to see where the topics actually start in the text.
const findTopicLines = (keyword) => {
    let results = [];
    for (let i = 65; i < lines.length; i++) {
        if (lines[i].toLowerCase().includes(keyword.toLowerCase())) {
            results.push(`Line ${i}: ${lines[i]}`);
        }
    }
    return results;
}

console.log("---- Inkilap ----");
console.log(findTopicLines("Atatürk İlkeleri ve İnkılap Tarihi").slice(0, 5));
console.log("---- Egitim ----");
console.log(findTopicLines("Eğitim Bilimleri").slice(0, 5));
console.log("---- Maarif ----");
console.log(findTopicLines("Maarif Modeli").slice(0, 5));
console.log("---- Mevzuat ----");
console.log(findTopicLines("Mevzuat").slice(0, 5));
