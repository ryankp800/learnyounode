var fs = require('fs');
var path = require('path');

var fileExt = process.argv[3];
var winPath = process.argv[2];

module.exports = function(dir, ext, callback){
fs.readdir(winPath, function callback(err, list) {
    if(err){ return console.error(err)}

    var array = list.toString().split('\,')

    array.forEach(function(element) {
        if(path.parse(element).ext === '.' + fileExt)
        console.log(element)
    })
})}