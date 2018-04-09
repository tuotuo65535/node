/*var buf = Buffer.alloc(10);
var len = buf.write('www.runoob.com');
console.log('写入字节数：' + len);
console.log(buf.toString());
console.log(buf.toJSON());*/

/*
const buf = Buffer.from([0x1,2,3,4,5]);
const json = JSON.stringify(buf);
console.log(buf);
console.log(json);
console.log(buf.toString());
const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer'?
        Buffer.from(value.data):
        value;
});
console.log(copy);*/

var buffer1 = Buffer.write()