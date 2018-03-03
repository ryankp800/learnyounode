

exports.worker = function (dirName, fileExt, function(err, data) {
    if(err) {
        return console.error(err)
    }

    data.forEach(function(item){
        console.log(item);
    })
})