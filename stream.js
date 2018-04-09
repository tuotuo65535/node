/*
var fs = require('fs');
var data = '';
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF-8');
readerStream.on('data', function(chunk){
    data += chunk;
});
readerStream.on('end', function () {
    console.log(data);
});
readerStream.on('error', function (err) {
    console.log(err.stack);
});
console.log('程序执行完毕');*/
/*
var fs = require('fs');
var data = 'www.runoob.com';
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data, 'UTF-8');
writeStream.end();
writeStream.on('finish', function () {
    console.log('write done.');
});
writeStream.on('error', function (err) {
   console.log(err.stack);
});
console.log('program end');
*/
/*
var fs = require('fs');
var readerStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('output.txt');
readerStream.pipe(writeStream);
console.log('program end');*/
var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));
console.log('program end');
