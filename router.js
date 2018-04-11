var fs = require('fs');

function route(pathname) {
    let content = "";
    let status = 0;
    switch (pathname){
        case '/':
            content = showPaper('./page/index.html');
            status = 200;
            break;
        case '/home':
            content = showPaper('./page/index.html');
            status = 200;
            break;
        case '/add':
            content = showPaper('./page/add/add.html');
            status = 200;
            break;
        default:
            content = '404 error';
            status = 404;
            break;
    }
    return {content, status};
}

function showPaper(path) {
    var content = fs.readFileSync(path);
    return content;
}

exports.route = route;