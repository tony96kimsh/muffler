require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

const API_KEY = process.env.API_KEY;
const BIN_ID = process.env.BIN_ID;
const BASE_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

let memoList = [];

const loadMemoList = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/latest`, {
            headers: { 'X-Master-Key': API_KEY }
        });
        memoList = res.data.record || [];
    } catch (err) {
        console.error('DB 로딩 실패', err.message);
        memoList = [];
    }
};

const saveMemoList = async () => {
    try {
        await axios.put(BASE_URL, memoList, {
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': API_KEY
            }
        });
    } catch (err) {
        console.error('메모 저장 실패', err.message);
    }
};

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', async (req, res) => {
    await loadMemoList();
    res.render('index', { memoList });
});

app.post('/add', async (req, res) => {
    const memo = req.body.memo;
    if (memo.trim()) {
        const newMemo = {
            id: Date.now(),
            text: memo,
            createdAt: new Date().toISOString()
        };
        memoList.push(newMemo);
        await saveMemoList();
    }
    res.redirect('/');
});

app.post('/delete', async (req, res) => {
    const index = req.body.index;
    memoList.splice(index, 1);
    await saveMemoList();
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('방명록 앱 실행 중! http://localhost:3000');
});