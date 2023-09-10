/**
 * The findLast() method of Array instances iterates the array in reverse order 
 * and returns the value of the first element that satisfies the provided testing function. 
 * If no elements satisfy the testing function, undefined is returned.
 */
Array.prototype.ownFindLast = function (callback) {
    for (let i = this.length; i >= 0; i--) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
};