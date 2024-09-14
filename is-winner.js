async function isWinner(countryName) {
    try {
      // Fetch country details
      const country = await db.getWinner(countryName);
      
      // Check if the country is from Europe
      if (country.continent !== 'Europe') {
        return `${countryName} is not what we are looking for because of the continent`;
      }
      
      // Fetch results for the country
      const results = await db.getResults(country.id);
      
      // Check if the country won fewer than 3 times
      if (results.length < 3) {
        return `${countryName} is not what we are looking for because of the number of times it was champion`;
      }
      
      // Format the results for the country
      const years = results.map(result => result.year).join(', ');
      const scores = results.map(result => result.score).join(', ');
      
      return `${countryName} won the FIFA World Cup in ${years} winning by ${scores}`;
    } catch (error) {
      // Handle errors for non-existent countries or missing results
      if (error.message === 'Country Not Found') {
        return `${countryName} never was a winner`;
      }
      if (error.message === 'Results Not Found') {
        return `${countryName} never was a winner`;
      }
      throw error; // Re-throw unexpected errors
    }
  }
  