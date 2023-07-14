/** 
 * Promise.all takes an array of promises as an input, 
 * and returns a single Promise that resolves to 
 * an array of the results of the input promises.
*/
Promise.myAll = function (promises) {
    if (promises.length === 0) {
        return Promise.resolve(promises);
    }
    return new Promise((resolve, reject) => {
        let output = [], counter = 0;
        for (let i=0; i<promises.length; i++) {
            Promise.resolve(promises[i]).then(response => {
                output[i] = response;
                counter++;

                if (counter === promises.length)
                    resolve(output);
            }).catch(err => {
                reject(err);
            })
        }
    })
}
