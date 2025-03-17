const fs = require('fs');

console.log('시작');
fs.readFile('./readme.2.txt', (err, data) => {
    if (err) {
        throw err;
    }
})