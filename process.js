const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const styleRegex = /<style>([\s\S]*?)<\/style>/;
const scriptRegex = /<script>([\s\S]*?)<\/script>/;

let styleContent = '';
let scriptContent = '';

const newHtml = html
  .replace(styleRegex, (match, p1) => {
    styleContent = p1.trim();
    return '<link rel="stylesheet" href="style.css" />';
  })
  .replace(scriptRegex, (match, p1) => {
    scriptContent = p1.trim();
    return '<script src="script.js"></script>';
  });

fs.writeFileSync('style.scss', styleContent);
fs.writeFileSync('style.css', styleContent); // Also save as .css so the HTML works
fs.writeFileSync('script.js', scriptContent);
fs.writeFileSync('index.html', newHtml);

console.log('Files separated successfully!');
