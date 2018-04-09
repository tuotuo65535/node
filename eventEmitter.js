var events = require('events');
/*
var event = new events.EventEmitter();
event.on('some_event', function () {
    console.log('come_event 时间触发');
});
setTimeout(function () {
    event.emit('some_event');
}, 1000);
console.log('program end');*/
var eventEmitter = new events.EventEmitter();
var listener1 = function listener1(){
    console.log('listener1 executing');
};
var listener2 = function listener2(){
    console.log('listener2 executing');
};
eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);
var eventListeners = require('events').EventEmitter
.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' 个监听器监听连接事件。');
eventEmitter.emit('connection');
eventEmitter.removeListener('connection', listener1);
eventEmitter.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,
    'connection');
console.log(eventListeners + ' 个监听器监听连接事件。');
//eventEmitter.emit('error');
console.log('program end');