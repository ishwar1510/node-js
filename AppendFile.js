var fs = require('fs')

fs.appendFile('Calc.js',
'console.log("this is my extends")',
((err)=>{console.log("my data:done")}))