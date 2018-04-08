var events = require('events');
var event = new events.EventEmitter();
event.on('some_event', function () {
    console.log('come_event 时间触发');
});
setTimeout(function () {
    event.emit('some_event');
}, 1000);
console.log('program end');