Array.prototype.oPush = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
    }
    return this.length;
  };

  let array = [1,2,3,4];
  array.oPush(5);
  console.log(array); // 1, 2, 3, 4, 5