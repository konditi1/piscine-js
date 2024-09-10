
  const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
  const filterValues = (obj, predicate) => {
    return Object.keys(obj)
      .filter(key => predicate(obj[key]))
      .reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
      }, {});
  };

  const mapValues = (obj, fn) => {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = fn(obj[key]);
      return acc;
    }, {});
  };
  
  const reduceValues = (obj, reducer, initialValue) => {
    console.log(obj)
    // Handle objects with nested nutritional values
    return Object.keys(obj).reduce((acc, key) => {
      const item = obj[key];
  
      // If the item is an object (e.g., from nutritionDB), reduce its values
      if (typeof item === 'object' && !Array.isArray(item)) {
        const itemValue = Object.values(item).reduce(reducer, initialValue);
        return acc + itemValue;
      }
  
      // Otherwise, reduce directly
      return reducer(acc, item);
    }, initialValue);
  };
  

