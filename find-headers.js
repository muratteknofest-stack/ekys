const fs = require('fs');
const lines = fs.readFileSync('Ekys-extracted.txt', 'utf8').split('\n').map(l => l.trim());

let output = [];
for (let i = 200; i < lines.length; i++) {
    const line = lines[i];
    // Check if line is ALL uppercase, longer than 5 chars, shorter than 40 chars
    if (line.length > 5 && line.length < 50 && line === line.toUpperCase() && !line.match(/[0-9]/) && !line.includes('.......')) {
        output.push(`Line ${i}: ${line}`);
    }
}
fs.writeFileSync('headers.txt', output.join('\n'));
