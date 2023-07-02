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

let array = [1, 2, 3, 4, 5];
let result = array.oReduce((acc, next) => +acc + next, [0]);
console.log(result)