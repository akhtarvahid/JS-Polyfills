/**
 * The indexOf() method of Array instances returns the first index 
 * at which a given element can be found in the array, or -1 if it is not present.
 */
Array.prototype.ownIndexOf = function (element, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === element) {
            return i;
        }
    }

    return -1;
};