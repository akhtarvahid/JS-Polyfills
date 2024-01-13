// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, 
 // passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". 
  // If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).


Array.prototype.oReduce = function (cb, initialValue) {
    let initialIndex = 0, output;

    if (arguments.length == 1) {
        output = this[0];
        initialIndex = 1;
    }

    if (arguments.length >= 2) {
        output = initialValue;
    }

    for (let i = initialIndex; i < this.length; i++) {
        output = cb(output, this[i]);
    }

    return output;
};

Array.prototype.mReduce = function (cb, initialValue = 0) {
    let total = initialValue
    for (let i = 0; i < this.length; i++) {
        if (total !== undefined) {
            total = cb.call(undefined, total, this[i], i, this);
        } else {
            total = this[i];
        }
    }
    return total;
}