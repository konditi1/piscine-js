async function all(promisesObj = {}) {
    const keys = Object.keys(promisesObj);
    
    // Handle empty object case
    if (keys.length === 0) {
      return {};
    }
    
    const results = {};
    const errors = [];
    
    // Iterate over keys and handle promises
    for (const key of keys) {
      try {
        results[key] = await promisesObj[key];
      } catch (error) {
        // Store error if promise rejects
        errors.push({ key, error });
      }
    }
    
    if (errors.length > 0) {
      // If there are errors, return the first one
      throw errors[0].error;
    }
    
    return results;
  }
  