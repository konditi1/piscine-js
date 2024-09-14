function retry(count, callback) {
    return async function (...args) {
      let attempts = 0;
  
      while (attempts <= count) {
        try {
          return await callback(...args);
        } catch (error) {
          attempts++;
          if (attempts > count) {
            throw error;
          }
        }
      }
    };
  }

  function timeout(delay, callback) {
    return async function (...args) {
      let timeoutId;
  
      const timeoutPromise = new Promise((_, reject) => {
        timeoutId = setTimeout(() => {
          reject(new Error('timeout'));
        }, delay);
      });
  
      try {
        const result = await Promise.race([
          callback(...args),
          timeoutPromise
        ]);
  
        // Clear the timeout if the callback resolves before the timeout
        clearTimeout(timeoutId);
        return result;
      } catch (error) {
        // Ensure the timeout is cleared in case of an error as well
        clearTimeout(timeoutId);
        throw error;
      }
    };
  }
  
  
  