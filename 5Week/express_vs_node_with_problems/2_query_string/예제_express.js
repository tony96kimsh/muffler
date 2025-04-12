// [Express 예제] Query String 처리
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const keyword = req.query.keyword;
  res.send('검색어: ' + keyword);
});

app.listen(3000, () => {
  console.log('Express server running at http://localhost:3000');
});

// 개념 설명:
// - req.query: 쿼리스트링을 객체 형태로 제공
//   예: /search?keyword=책 → req.query.keyword === '책'
