var server = require('./routeServer');
var router = require('./router');

server.start(router.route);