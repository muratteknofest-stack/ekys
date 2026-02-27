const fs = require('fs');
try {
    const pdf = require('pdf-parse');
    const buf = fs.readFileSync('c:\\Users\\MİSAFİR\\Desktop\\ekys\\deneme.pdf');
    pdf(buf).then(d => {
        fs.writeFileSync('c:\\Users\\MİSAFİR\\Desktop\\ekys\\out.txt', d.text);
        console.log('Success');
    }).catch(e => {
        fs.writeFileSync('c:\\Users\\MİSAFİR\\Desktop\\ekys\\err.txt', e.stack);
        console.log('Promise Catch');
    });
} catch (e) {
    fs.writeFileSync('c:\\Users\\MİSAFİR\\Desktop\\ekys\\err.txt', e.stack);
    console.log('Sync Catch');
}
