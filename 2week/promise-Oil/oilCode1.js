class MyPromise {
    constructor(executor) {
      this.value = undefined; // resolve된 값 저장
      this.isResolved = false; // resolve가 호출 되었는지 체크
  
      const resolve = (value) => {
        this.value = value;
        this.isResolved = true;
      };
  
      executor(resolve); // 실행
    }
  
    then(callback) {
      if (this.isResolved) {
        callback(this.value);
      }
    }
  }
  
  // 실행 예제
  const x = new MyPromise((resolve) => {
    resolve('성공!!!');
  });
  
  x.then((result) => console.log(result));