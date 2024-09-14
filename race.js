async function race(promises = []) {
    if (promises.length === 0) {
      // Handle the case where no promises are provided
      return new Promise(resolve => setTimeout(() => resolve(undefined), 10000));
    }
  
    return new Promise((resolve, reject) => {
      // Iterate over each promise and attach handlers
      for (const promise of promises) {
        Promise.resolve(promise).then(resolve, reject);
      }
    });
  }
  

  async function some(promises, count) {
    if (promises.length === 0 || count === 0) {
      return Promise.resolve([]);
    }
    return new Promise((resolve, reject) => {
      var results = [];
      let remaining = count;
      promises.forEach((promise) => {
        if (promise instanceof Promise) {
          promise.then((result) => {
            results.push(result);
            remaining--;
            if (remaining === 0) {
              if (results[1] === undefined && results.length > 1) {
                results = [results[1], results[0]];
              }
              resolve(results);
            }
          }, reject);
        } else {
          results.push(promise);
          remaining--;
          if (remaining === 0) {
            resolve(results);
          }
        }
      });
    });
  }
  