const promise1 = Promise.resolve('Promise 1 resolved');

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 2000);
});

// one after another
promise1.then(res => console.log(res));
promise2.then(res => console.log(res));

// all together
Promise.all([promise1, promise2])
    .then(res => console.log(res));

// to get the first resolved promise
Promise.race([promise1, promise2])
    .then(res => console.log(res));