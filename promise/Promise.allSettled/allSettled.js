/** 
 * The Promise.allSettled() method returns a promise 
 * that fulfills after all of the given promises have either fulfilled or rejected, 
 * with an array of objects that each describes the outcome of each promise
 */

Promise.myAllSettled = function (promises) {
    if (promises.length === 0) {
        return Promise.resolve(promises);
    }
    return new Promise((resolve, reject) => {
        let output = [], counter = 0;
        for (let [key, promise] of promises.entries()) {
            Promise.resolve(promise).then(response => {
                output[key] = {status: 'fulfilled', value: response};
            }).catch(err => {
                output[key] = {status: 'rejected', reason: err};
            }).finally(() => {
                counter++;
                  if (counter === promises.length) {
                    resolve(output);
                }
            })
        }
    })
}
