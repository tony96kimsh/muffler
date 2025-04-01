
class MyPromise {
  constructor(executor) {
    this.state = 'pending'; // "fulfilled" 또는 "rejected" 가 되어야 함 -> 초기는 pending (대기)
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilled = null;
    this.onRejected = null;

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        if (this.onFulfilled) this.onFulfilled(value);
      }
    };

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        if (this.onRejected) this.onRejected(reason);
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    } else {
      this.onFulfilled = onFulfilled;
    }
    return this;
  }
  catch(onRejected) {
    if (this.state === 'rejected') {
      onRejected(this.reason);
    } else {
      this.onRejected = onRejected;
    }
    return this;
  }
}

// 실행 예제
const x = new MyPromise((resolve, reject) => {
  setTimeout(() => reject('❌ 실패!'), 3000);
});

x.then((value) => console.log(value)).catch((err) => console.error(err)); // 100ms 후 "❌ 실패!" 출력