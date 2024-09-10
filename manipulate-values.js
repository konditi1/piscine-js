
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
    return Object.values(obj).reduce(reducer, initialValue);
  };

