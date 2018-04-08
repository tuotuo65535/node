var fs = require('fs');
/*
同步
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('program end');
*/

fs.readFile('input.txt', function(err,data){
    if(err)
        return console.error(err);
    console.log(data.toString());
});

console.log('program end');
