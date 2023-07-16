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

Array.prototype.mReduce = function(cb, initialValue = 0) {
    let total = initialValue
    for(let i = 0; i<this.length; i++) {
         if (total !== undefined) {
          total = cb.call(undefined, total, this[i], i, this);
         } else {
          total = this[i];
         }
    }
    return total;
}