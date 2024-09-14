// Function to query the servers
async function queryServers(serverName, q) {
    // Construct URLs
    const url1 = `/pouet?q=${encodeURIComponent(q)}`;
    const url2 = `/pouet_backup?q=${encodeURIComponent(q)}`;
  
    try {
      // Create two fetch promises
      const fetch1 = getJSON(url1);
      const fetch2 = getJSON(url2);
  
      // Use Promise.race to return the fastest result
      return await Promise.race([fetch1, fetch2]);
    } catch (error) {
      // Handle errors if any
      throw error;
    }
  }
  
  // Function to perform a Google-like search across multiple servers
  async function gougleSearch(q) {
    // Create promises for querying each server
    const webPromise = queryServers('web', q);
    const imagePromise = queryServers('image', q);
    const videoPromise = queryServers('video', q);
  
    // Create a timeout promise
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('timeout'));
      }, 80);
    });
  
    try {
      // Use Promise.all to wait for all the queries and the timeout
      const results = await Promise.race([
        Promise.all({
          web: webPromise,
          image: imagePromise,
          video: videoPromise
        }),
        timeoutPromise
      ]);
  
      return results;
    } catch (error) {
      // Handle timeout or any other errors
      if (error.message === 'timeout') {
        return error;
      }
      throw error;
    }
  }
  