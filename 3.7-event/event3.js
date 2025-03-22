const EventEmitter = require('events');
const myEvent = new EventEmitter();

// 리스너 정의
const ls1 = () => console.log("listener 1");
const ls2 = () => console.log("listener 2");

// 리스너 개수를 출력하는 함수
const showLs = e => {
    console.log(myEvent.listenerCount(e));
}

// 리스너 등록
myEvent.on('eventOn1', ls1);
myEvent.on('eventOn2', ls2);

// 리스너 개수 출력
showLs('eventOn1');  // 1
showLs('eventOn2');  // 1

// 리스너 제거
myEvent.removeListener('eventOn1', ls1);
myEvent.off('eventOn2', ls2);

// 리스너 개수 출력 (제거 후)
showLs('eventOn1');  // 0
showLs('eventOn2');  // 0
