// Function to query the servers
async function queryServers(serverName, q) {
    // Construct URLs
    const url = `/${serverName}?q=${encodeURIComponent(q)}`;
    const backupUrl = `/${serverName}_backup?q=${encodeURIComponent(q)}`;
  
    // Create two fetch promises
    const req1 = getJSON(url);
    const req2 = getJSON(backupUrl);
  
    // Use Promise.race to return the fastest result
    return Promise.race([req1, req2]);
  }
  
  // Function to perform a Google-like search across multiple servers
  async function gougleSearch(q) {
    // Create promises for querying each server
    const webPromise = queryServers('web', q);
    const imagePromise = queryServers('image', q);
    const videoPromise = queryServers('video', q);
  
    // Create a timeout promise
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('timeout')), 80);
    });
  
    try {
      // Wait for either all queries to complete or the timeout
      const results = await Promise.race([
        Promise.all([webPromise, imagePromise, videoPromise]),
        timeoutPromise
      ]);
  
      // Return results in the expected format
      return {
        web: results[0],
        image: results[1],
        video: results[2]
      };
    } catch (error) {
      // Handle errors including timeout
      if (error.message === 'timeout') {
        throw error;
      }
      throw error;
    }
  }
  