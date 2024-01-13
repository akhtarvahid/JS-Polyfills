// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

Array.prototype.oMap = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    const value = cb(this[i], i, this);
    result.push(value);
  }

  return result;
};
let array = [1, 2, 3, 4, 5];
let output = array.oMap(num => num * 5);
console.log(output)