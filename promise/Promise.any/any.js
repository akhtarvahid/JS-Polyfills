Promise.myAny = function(promises) {
    let counter = 0, errors = new Array(promises.length);

    return new Promise((resolve, reject)=>{
        promises.forEach((promise, index)=> {
            Promise.resolve(promise).then(data => resolve(data)).catch(error=> {
                errors[index] = error;
                counter++;
                if(counter === promises.length) {
                    reject(new AggregateError(errors, "all Promises were rejected"));
                }
            })
        })
    })
}