
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
  
  const reduceValues = (cart, db, key) => {
    return Object.keys(cart).reduce((acc, item) => {
      const itemWeight = cart[item] / 100;  // normalize to 100 grams
      return acc + (db[item][key] * itemWeight);
    }, 0);
  };

