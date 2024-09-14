function timeout(delay, callback) {
    return async function (...args) {
      let timedOut = false;
  
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          timedOut = true;
          reject(new Error('timeout'));
        }, delay);
      });
  
      const result = await Promise.race([
        callback(...args),
        timeoutPromise
      ]);
  
      if (timedOut) {
        throw new Error('timeout');
      }
  
      return result;
    };
  }
  