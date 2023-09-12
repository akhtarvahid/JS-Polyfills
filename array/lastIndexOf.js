/**
 * The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. 
 * The array is searched backwards, starting at fromIndex.
 */
Array.prototype.ownLastIndexOf = function (
    element,
    fromIndex = this.length - 1
) {
    for (const i = fromIndex; i >= 0; i--) {
        if (this[i] === element) {
            return i;
        }
    }
    return -1;
};