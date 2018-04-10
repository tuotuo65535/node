var Hello = require('./moduleHello');
/*
var h = Hello();
global.sayHello();*/
var h = new Hello();
h.setName('t-mac');
h.sayHello();