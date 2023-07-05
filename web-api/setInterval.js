function createSetIntervalPolyfill() {

    // closure
    var countInterval = 0;
    var intervalMap = {};
  
    function setIntervalPolyfill(callback, delay = 0, ...args) {
      //Check whether callback is a function
      if(typeof callback !== 'function') {
        throw new TypeError('callback should be a function');
      }

      // Unique id  
      let id = countInterval++;

      function repeat() {
        intervalMap[id] = setTimeout(() => {
  
          callback(...args)
  
          // Termination condition
          if(intervalMap[id]) {
            repeat()
          }
        }, delay)
      }
  
      repeat();
      return id
    }
  
    function clearIntervalPolyfill(countInterval) {
      clearTimeout(intervalMap[countInterval])
      delete intervalMap[countInterval]
    }
    return {
      setIntervalPolyfill,
      clearIntervalPolyfill
    }
  }
  
  const {
    setIntervalPolyfill,
    clearIntervalPolyfill
  } = createSetIntervalPolyfill()
  
  let counter = 0;
  let countInterval;
  
  function sayHello() {
    counter++;
    if(counter >= 3) {
      clearIntervalPolyfill(countInterval)
    }
    console.log("Hello dost...")
  }
  
  countInterval = setIntervalPolyfill(sayHello, 1000)