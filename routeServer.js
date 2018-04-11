var http = require('http');
var url = require('url');

function start(route){
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received');

        let rs = route(pathname);

        response.writeHead(rs.status, {'Content-Type':'text/html;charset=utf-8'});
        response.write(rs.content.toString());
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}

exports.start = start;