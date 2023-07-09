// own flat => oFlat 
Array.prototype.oFlat = function (depth = 1) {
    let output = [];

    function flatFn(array, depth) {
        for (let i = 0; i < array.length; i++) {
            // Terminate callback if depth is 0
            if (Array.isArray(array[i]) && depth > 0) {
                flatFn(array[i], depth - 1);
            } else {
                output.push(array[i]);
            }
        }
    }
    flatFn(this, depth);

    return output;
}

//IIFY
Array.prototype.flatten = function (depth = 1) {
    let output = [];

    (function flatFn(array, depth) {
        for (let i = 0; i < array.length; i++) {
            // Terminate callback if depth is 0
            if (Array.isArray(array[i]) && depth > 0) {
                flatFn(array[i], depth - 1);
            } else {
                output.push(array[i]);
            }
        }
    })(this, depth);

    return output;
}

