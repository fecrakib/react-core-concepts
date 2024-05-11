
const fs  = require('fs');
const output = fs.readFileSync('./hell.txt',"utf-8");
console.log(output);
const text  = "Hello level 2";
fs.writeFileSync("../test/write.txt",text);
