// 등륵
const EventEmitter = require('events');
const myEventEmitter = new EventEmitter();

// 콜백 등록
myEventEmitter.addListener('event1', () => {
    console.log('text1');
});

// 호출
myEventEmitter.emit('event1');