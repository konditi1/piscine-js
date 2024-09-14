async function series(asyncFuncs) {
    // Initialize an empty array to hold results
    const results = [];
    
    // Iterate over the array of async functions
    for (const func of asyncFuncs) {
      try {
        // Wait for the function to resolve and push the result to the results array
        const result = await func();
        results.push(result);
      } catch (error) {
        // Handle any errors that occur during the execution of the async functions
        throw error;
      }
    }
    
    return results;
  }
  