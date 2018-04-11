console.log('filename:'+__filename);
console.log('dir:'+__dirname);
console.time('time');
console.timeEnd('time');
process.on('exit', function (code) {
   console.log('退出码为：',code);
});
console.log('程序执行结束');