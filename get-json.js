async function getJSON(path, params = {}) {
    // Construct the query string from params
    const queryString = new URLSearchParams(params).toString();
    
    // Construct the full URL
    const url = queryString ? `${path}?${queryString}` : path;
    
    try {
      // Perform the fetch request
      const response = await fetch(url);
      
      // Check if the response is OK (status in the range 200-299)
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      
      // Parse the response body as JSON
      const result = await response.json();
      
      // Check if the result contains "data" or "error"
      if (result.error) {
        throw new Error(result.error);
      }
      
      return result.data;
    } catch (error) {
      // Handle any errors
      throw error;
    }
  }
  