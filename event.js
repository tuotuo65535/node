var events = require('events');
var eventEmmiter = new events.EventEmitter();
var connectHandler = function connected() {
  console.log('connect success');
  eventEmmiter.emit('data_receiving');
};

eventEmmiter.on('connecting', connectHandler);
eventEmmiter.on('data_receiving', function(){
    console.log('data receive success');
});

eventEmmiter.emit('connecting');
console.log('program end');