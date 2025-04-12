// [Node.js 예제] POST 요청 처리 (폼 전송)
const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.url === '/submit' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      const data = querystring.parse(body);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`안녕하세요, ${data.name}님!`);
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<form method="POST" action="/submit">
               이름: <input type="text" name="name" />
               <button type="submit">전송</button>
             </form>`);
  }
});

server.listen(3000, () => {
  console.log('Node.js server running at http://localhost:3000');
});

// 개념 설명:
// - req.on('data'): 데이터를 조각으로 수신
// - querystring.parse(): 데이터를 객체로 변환
