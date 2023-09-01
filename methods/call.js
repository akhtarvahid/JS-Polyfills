Function.prototype.ownCall = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new Error(`${this} it's not callable`);
    }

    let result;
    context.myFn = this;
    result = context.myFn(...args);
    delete context.myFn;

    return result;
};