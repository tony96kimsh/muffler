class MyPromise {
  constructor(executor) {
    this.value = undefined;
    this.isResolved = false;
    this.thenCallback = null;

    const resolve = (value) => {
      this.value = value;
      this.isResolved = true;
      if (this.thenCallback) {
        this.thenCallback(value);
      }
    };

    executor(resolve); // 실행
  }

  then(callback) {
    if (this.isResolved) {
      callback(this.value); // 이미 resolve된 경우 즉시 실행
    } else {
      this.thenCallback = callback; // 나중에 실행할 콜백 저장
    }
  }
}

// 실행 예제
const x = new MyPromise((resolve) => {
  setTimeout(() => resolve('🎉 비동기 성공!'), 3000);
});

setTimeout(() => {
  x.then((result) => console.log(result));
}, 2000);