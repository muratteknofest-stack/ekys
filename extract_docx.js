const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

const docxPath = 'C:\\Users\\MİSAFİR\\Desktop\\ekys\\bilgiler\\maarif.docx';

mammoth.extractRawText({ path: docxPath })
    .then(function (result) {
        const text = result.value;
        fs.writeFileSync('C:\\Users\\MİSAFİR\\Desktop\\ekys\\bilgiler\\maarif_text.txt', text);
        console.log('Extraction completed successfully.');
    })
    .catch(function (err) {
        console.error(err);
    });
