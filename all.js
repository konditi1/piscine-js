async function all(promisesObj) {
    // Get an array of the keys from the promisesObj
    const keys = Object.keys(promisesObj);
  
    // Create an array of promises from the values of the promisesObj
    const promises = keys.map(key => promisesObj[key]);
  
    // Wait for all promises to resolve and get their results
    const results = await Promise.all(promises);
  
    // Return an object with the same keys, but with resolved values
    return keys.reduce((result, key, index) => {
      result[key] = results[index];
      return result;
    }, {});
  }
  