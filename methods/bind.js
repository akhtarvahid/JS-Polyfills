// own bind => oBind
if (!Function.prototype.oBind) {
    Function.prototype.oBind = function (oThis) {
        if (typeof this !== 'function') {
            // throw error if not callable
            throw new TypeError('Function.prototype.oBind - what is trying to be bound is not callable');
        }

        var args = Array.prototype.slice.call(arguments, 1),
            self = this,
            protoFnObject = function () { },
            fnBound = function () {
                return self.apply(this instanceof protoFnObject
                    ? this
                    : oThis,
                    args.concat(Array.prototype.slice.call(arguments)));
            };

        if (this.prototype) {
            // If Function.prototype doesn't have a prototype property
            protoFnObject.prototype = this.prototype;
        }
        fnBound.prototype = new protoFnObject();
        return fnBound;
    }
}