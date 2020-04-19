const path = require('path');
const fs = require('fs');

const dir = path.resolve('./public/pictures');

const pictures = [];

fs.readdirSync(dir).forEach(file => {
  // console.log(file);
  pictures.push(file)
});
console.log(pictures);
// const imgNames: string[] = [];
const targetFilePath = path.resolve('./src/api/data.ts');
const targetFile = fs.readFileSync(targetFilePath, {encoding:'utf8', flag:'r'});
const newContent = targetFile.replace('const imgNames: string[] = [];', `const imgNames: string[] = ${JSON.stringify(pictures)};`)
console.log(targetFile);
console.log(newContent);
fs.writeFileSync(targetFilePath, newContent);