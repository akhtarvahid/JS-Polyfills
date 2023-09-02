/**
 * The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. 
 * If no elements satisfy the testing function, -1 is returned.
 */
Array.prototype.ownFindIndex = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }
    return -1;
};