require('./race');


let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(30), 100);
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(20), 0);
});
let promise3 = new Promise((resolve) => resolve(300));


Promise.myRace([promise3, promise2, promise1])
    .then(values => { console.log(values) })
    .catch(err => console.log(err))