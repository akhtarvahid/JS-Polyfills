// create a curry
function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...newArgs) {
                return curried.apply(this, [...args, ...newArgs]);
            }
        }
    };

}
module.exports = curry;