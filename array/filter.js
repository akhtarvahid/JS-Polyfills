Array.prototype.oFilter = function (cb) {
    let result = [];
  
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        result.push(this[i]);
      }
    }
  
    return result;
  };
  let array = [1,2,3,4,5];
  const filtered = array.oFilter(a => a%2 == 0);
  console.log(filtered);