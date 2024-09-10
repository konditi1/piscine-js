
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
  
  
  const reduceValues = (cart, reducer, initialValue) => {
    return Object.keys(cart).reduce((acc, item) => {
      const quantity = cart[item]; // Get the quantity from the cart
      const nutrition = nutritionDB[item]; // Get the nutrition facts from the database
    
      if (!nutrition) {
        throw new Error(`Nutrition information for '${item}' not found in the database.`);
      }
    
      // Specifically sum only the calories, not all nutrients
      const calories = nutrition.calories * (quantity / 100); // Normalize to the quantity in grams
    
      return reducer(acc, calories);
    }, initialValue);
  };
  ({ ctx }) => reduceValues(ctx.groceriesCart, (acc, cr) => acc + cr)
  console.log({ ctx })