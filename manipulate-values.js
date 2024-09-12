
  const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
  const filterValues = (obj, callback) => {
    let result = {};
    for (let[key, value] of Object.entries(obj)) {
      if (callback(value)) {
        result[key] = value;
      }
    }
    return result;
  };

const mapValues = (obj, callback) => {
  let result = {}

  for (let [key, value] of Object.entries(obj)) {
    result[key] = callback(value)
  }
  return result
}

const reduceValues = (obj, callback) => {
  let result = 0
  for (let val of Object.values(obj)) {
    result = callback(result, val)
    // console.log((result))
  }
  return result
}

// console.log(reduceValues(nutrients, (acc, cr) => acc + cr))  