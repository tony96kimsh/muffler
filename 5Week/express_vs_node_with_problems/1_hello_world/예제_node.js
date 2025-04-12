// [Node.js 예제] Hello World 서버
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Node!');
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Node.js server running at http://localhost:3000');
});

// 개념 설명:
// - http.createServer(): 서버 생성
// - req.url / req.method: 요청 정보 확인
// - res.writeHead() / res.end(): 응답 전송
