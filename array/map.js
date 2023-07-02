Array.prototype.oMap = function (cb) {
    let result = [];
  
    for (let i = 0; i < this.length; i++) {
      const value = cb(this[i], i, this);
      result.push(value);
    }
  
    return result;
  };
  let array = [1,2,3,4,5];
  let output = array.oMap(num => num * 5);
  console.log(output)