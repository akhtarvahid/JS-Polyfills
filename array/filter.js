// The filter() method of Array instances creates a shallow copy of a portion of a given array, 
  // filtered down to just the elements from the given array that pass the test implemented by the provided function.

Array.prototype.oFilter = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};
let array = [1, 2, 3, 4, 5];
const filtered = array.oFilter(a => a % 2 == 0);
console.log(filtered);