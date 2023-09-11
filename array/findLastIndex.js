/**
 * The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. 
 * If no elements satisfy the testing function, -1 is returned.
 */
Array.prototype.ownFindLastIndex = function (callback) {
    for (let i = this.length; i >= 0; i--) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }
    return -1;
};