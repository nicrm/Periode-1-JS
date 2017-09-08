var fs = require('fs');
var filePath = process.argv[2];
var output = fs.readFileSync(filePath);
output = output.toString().split('\n');
console.log(output.length - 1);