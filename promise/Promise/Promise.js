const PENDING = 1;
const FULFILLED = 2;
const REJECTED = 3;
function MyPromise(executor) {
    let status = PENDING;
    let value = null;
    let handlers = [], catchers = [];

    function resolve(result) {
        if (status !== PENDING) return;

        value = result;
        status = FULFILLED;
        handlers.forEach((handler) => handler(value));
    }
    function reject(error) {
        if (status !== PENDING) return;

        value = error;
        status = REJECTED;
        catchers.forEach((catcher) => catcher(value));
    }
    this.then = function (successCallback) {
        if (status === FULFILLED) {
            successCallback(value);
        } else {
            handlers.push(successCallback);
        }
        return this;
    }
    this.catch = function (failureCallback) {
        if (status === REJECTED) {
            failureCallback(value);
        } else {
            catchers.push(failureCallback);
        }
        return this;
    }

    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}