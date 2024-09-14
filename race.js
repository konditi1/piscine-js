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
  
    while (resolvedValues.length < count && pendingPromises.length > 0) {
      try {
        const result = await Promise.race(pendingPromises);
        resolvedValues.push(result);
        // Remove the resolved promise from pendingPromises
        pendingPromises.splice(pendingPromises.indexOf(Promise.resolve(result)), 1);
      } catch (error) {
            return new error
      }
    }
  
    return resolvedValues;
  }
  