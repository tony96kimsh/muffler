class MyPromise {
    constructor(executor) {
        this.value = undefined;
        this.isResolved = false;

        const resolve = (value) => {
            this.value = value;
            this.isResolved = true;
        };

        executor(resolve);
    }

    then(callback) {
        if (this.isResolved) {
            callback(this.value);
        }
    }
}

// 실행 예정
const x = new MyPromise((resolve) => {
    resolve('성공');
});

x.then((result) => console.log(result));