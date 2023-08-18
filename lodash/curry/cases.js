var curry = require('./curry');

const multiply = (w, x, y, z) =>  w * x * y * z;
let curried = curry(multiply);
console.log(curried(2, 3, 4, 5));
console.log(curried(2, 3, 4)(5));
console.log(curried(2, 3)(4, 5));
console.log(curried(2)(3)(4)(5));