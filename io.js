var file = process.argv[2];
var buf = require('Buffer')
var fs =  require('fs')


buf = fs.readFileSync(file);

var str = buf.toString();

console.log(str.split('\n').length -1)
