// [Node.js 예제] Query String 처리
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/search' && req.method === 'GET') {
    const keyword = parsedUrl.query.keyword;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('검색어: ' + keyword);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

// 개념 설명:
// - url.parse(): Node 내장 모듈로 URL을 객체로 파싱
// - parsedUrl.query: 쿼리스트링 정보
