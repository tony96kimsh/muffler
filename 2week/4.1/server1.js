const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});
    res.write('<h1>Hello</h1>');
    res.end('<p>Bye</p>');
}).listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
})