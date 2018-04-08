var fs = require('fs');
/*
同步
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('program end');
*/

fs.readFile('input.txt', function(err,data){
    if(err)
        return console.error(err.stack);
    console.log(data.toString());
});

console.log('program end');
