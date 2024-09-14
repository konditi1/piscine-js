async function all(promisesObj) {
    const keys = Object.keys(promisesObj);
    
    // Handle empty object case
    if (keys.length === 0) {
      return {};
    }
  
    // Convert the object values to an array of promises
    const promises = keys.map(key => promisesObj[key]);
  
    // Use an alternative to Promise.all
    const results = await (async () => {
      let resolved = [];
      for (const promise of promises) {
        try {
          resolved.push(await promise);
        } catch (error) {
          resolved.push(error);
        }
      }
      return resolved;
    })();
  
    // Construct the result object
    return keys.reduce((result, key, index) => {
      result[key] = results[index];
      return result;
    }, {});
  }
  