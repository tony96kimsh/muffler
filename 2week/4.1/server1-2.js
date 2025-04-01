const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>Hello</h1>');
    res.end('<p>Hello 8080번!</p>')
}).listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
});

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>Hello</h1>');
    res.end('<p>Hello 8081번!</p>')
}).listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중입니다.');
});
