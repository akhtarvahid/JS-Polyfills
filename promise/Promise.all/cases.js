require('./all');

/**
 ** CASE 1 
 */
let promise1 = new Promise((resolve, reject) => resolve(10));
let promise2 = new Promise((resolve, reject) => resolve(20));
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(30), 100);
});
let promise4 = 40;

Promise.myAll([promise1, promise2, promise3, promise4])
    .then(values => { console.log(values) })
    .catch(err => console.log(err))
// OUTPUT
// 100 [ 10, 20, 30, 40 ]

/**
 ** CASE 2
 */
let prom1 = new Promise((resolve, reject) => resolve(50));
let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(60), 100);
});
let prom3 = 70;

Promise.myAll([prom1, prom2, prom3])
    .then(values => { console.log(values) })
    .catch(err => console.log(err))
//OUTPUT: 60

/**
 ** CASE 3
 */
let promises = []
Promise.myAll(promises)
    .then(values => console.log(values))
    .catch(err => console.log(err))

// OUTPUT: 