// [Express 예제] POST 요청 처리 (폼 전송)
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`<form method="POST" action="/submit">
              이름: <input type="text" name="name" />
              <button type="submit">전송</button>
            </form>`);
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  res.send(`안녕하세요, ${name}님!`);
});

app.listen(3000, () => {
  console.log('Express server running at http://localhost:3000');
});

// 개념 설명:
// - express.urlencoded(): 폼 데이터를 파싱하는 미들웨어
// - req.body: POST 데이터에 접근할 수 있는 객체
