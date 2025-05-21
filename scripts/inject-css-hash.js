const fs = require('fs');
const path = require('path');

const hash = fs.readFileSync(path.join(__dirname, '../dist/hash.txt'), 'utf8').trim();
const htmlPath = path.join(__dirname, '../src/index.html');
const outPath = path.join(__dirname, '../dist/index.html');

let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(/dist\/output(\.[a-z0-9]{8})?\.css/g, `dist/output.${hash}.css`);
fs.writeFileSync(outPath, html);

console.log(`Injected CSS hash: ${hash} into dist/index.html`);
