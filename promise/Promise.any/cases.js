require('./any');

let prom1 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 1);
})
let prom2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 2);
})
let prom3 = 3;
Promise.myAny([prom1, prom2])
.then((data) => console.log(data))
.catch(err=> console.log(err))