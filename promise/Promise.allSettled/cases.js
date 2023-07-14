require('./allSettled');

let promise1 = new Promise((resolve, reject) => resolve(10));
let promise2 = new Promise((resolve, reject) => resolve(20));
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(30), 100);
    console.log(100);
});
let promise4 = 40;

Promise.myAllSettled([promise1, promise2, promise3, promise4])
.then(values => values.forEach(val => console.log(val)))
.catch(err=> console.log(err))
