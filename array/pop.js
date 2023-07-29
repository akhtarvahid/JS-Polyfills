Array.prototype.ownPop = function () {
    if (this.length > 0) {
        let poppedItem = this[this.length - 1];
        this.length = this.length - 1;
        return poppedItem;
    }
};