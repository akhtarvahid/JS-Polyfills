
Function.prototype.ownBind = function (object, ...args) {
    if (typeof this !== 'function') {
        // throw error if not callable
        throw new TypeError('Function.prototype.ownBind - what is trying to be bound is not callable');
    }

    let self = this;
    return function (...newArgs) {
        self.apply(object, [...args, ...newArgs]);
    };
};