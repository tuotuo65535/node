/*
var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('Hello' + this.name);
    }
}
Base.prototype.showName = function () {
    console.log(this.name);
};
function Sub(){
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
console.log(objSub);

*/
/*var util = require('util');
function Person() {
    this.name = 'tuotuo';
    this.toString = function() {
        return this.name;
    }
}
var obj = new Person()
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));*/
var util = require('util');
console.log(util.isArray([]));
console.log(util.isArray(new Array()));
console.log(util.isArray({}));
