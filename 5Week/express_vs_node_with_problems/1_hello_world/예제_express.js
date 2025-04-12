// [Express 예제] Hello World 서버
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Express server running at http://localhost:3000');
});

// 개념 설명:
// - app.get(): 특정 경로에 대한 GET 요청을 처리
// - res.send(): 클라이언트에게 응답 전송
