function race(promises) {
    return new Promise((resolve, reject) => {
      for (const promise of promises) {
        Promise.resolve(promise).then(resolve, reject);
      }
    });
  }

  async function some(promises, count) {
    if (count <= 0 || promises.length === 0) {
      return [];
    }
  
    const resolvedValues = [];
    const pendingPromises = promises.map(p => Promise.resolve(p));
    const results = [];
  
    // Create a helper function to track the resolved values
    const trackResult = (result) => {
      results.push(result);
      if (results.length === count) {
        // Ensure we return only the first `count` resolved values
        return results;
      }
    };
  
    while (results.length < count && pendingPromises.length > 0) {
      try {
        const result = await Promise.race(pendingPromises);
        trackResult(result);
        // Remove the resolved promise from pendingPromises
        pendingPromises.splice(pendingPromises.indexOf(Promise.resolve(result)), 1);
      } catch (error) {
            return new error
      }
    }
  
    // Ensure we return an array with `count` items or less if there are not enough resolved values
    return results.length ? results : [];
  }
  