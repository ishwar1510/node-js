var fs = require('fs')
fs.readFile('Calc.js','utf8',((err,data)=>{
   console.log(data);
}))