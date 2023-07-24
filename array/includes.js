// searchString => Search element 
// position (Optional) => Search element from specified index
Array.prototype.oIncludes = function (element, position = 0) {
    for (let i = position; i < this.length; i++) {
        if (this[i] === element) {
            return true;
        }
    }
    return false;
};