/** 
 * Promise.race() returns the first settled value (either fulfillment or rejection).
*/
Promise.myRace = function (promisesArray) {
    return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      Promise.resolve(promise)
        .then(() => {
            if(typeof promise === 'number') {
                resolve(promise);
            } else {
                resolve(promise)
            }
        }) // resolve outer promise, as and when any of the input promise resolves
        .catch(reject); // reject outer promise, as and when any of the input promise rejects
    });
  });
}
