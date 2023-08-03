// start index(Optional) => Zero-based index at which to start extraction
// end index(Optional) => Zero-based index at which to end extraction

Array.prototype.ownSlice = function (startIndex = 0, endIndex = this.length) {
    if (startIndex < 0) {
        startIndex = this.length + startIndex;
    }
    if (endIndex < 0) {
        endIndex = this.length + endIndex;
    }

    let slicedArray = [];
    for (let i = startIndex; i < endIndex; i++) {
        slicedArray.push(this[i]);
    }

    return slicedArray;
};
