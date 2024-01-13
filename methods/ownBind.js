
Function.prototype.ownBind = function (object, ...args) {
    let self = this;

    if (typeof self !== 'function') {
        // throw error if not callable
        throw new TypeError('Function.prototype.ownBind - what is trying to be bound is not callable');
    }

    return function (...newArgs) {
        self.apply(object, [...args, ...newArgs]);
    };
};