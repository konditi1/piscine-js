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
    if (count <= 0 || promises.length === 0) {
      return [];
    }
  
    const resolvedResults = [];
    const pendingPromises = promises.map(p => Promise.resolve(p));
  
    // Create a promise that resolves when we have `count` resolved values
    return new Promise((resolve, reject) => {
      // Track remaining promises to wait for
      let pendingCount = count;
  
      pendingPromises.forEach(promise => {
        promise.then(
          result => {
            resolvedResults.push(result);
            pendingCount--;
  
            // Resolve the promise when we have collected enough results
            if (pendingCount === 0) {
              resolve(resolvedResults);
            }
          },
          // Reject on error
          reject
        );
      });
    });
  }
  