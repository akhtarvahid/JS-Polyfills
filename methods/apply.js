Function.prototype.ownApply = function (context, args) {
    if (typeof this !== 'function') {
        throw new Error(`${this} it's not callable`);
    }
    if (!Array.isArray(args)) {
        throw new TypeError('CreateListFromArrayLike called on non-object')
    }

    let result;
    context.myFn = this;
    result = context.myFn(args);
    delete context.myFn;

    return result;
};