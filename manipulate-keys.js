const nutrients ={
    vinegar: 80,
    sugar: 100,
    oil: 50,
    onion: 200,
    garlic: 22,
    paprika: 4
  }

const filterKeys = (obj, callback) => {
    let result = {}

    for (let [key, value] of Object.entries(obj)) {
        if (callback(key)) {
            result[key] = value
        }
    }
    return result
}

const mapKeys = (obj, callback) => {
    let result = {}
    for (let [key, value] of Object.entries(obj)) {
        result[callback(key)] = value
    }
    return result
}

const reduceKeys = (obj, callback, initialValue = "") => {
    // console.log(obj)
    let result = initialValue
    let start = true;
    for (let key in obj) {
        if ((start) && (initialValue === "")) {
            result = key  
            start = false     
        } else {
            result = callback(result, key)            
        }
    }
    return result
}
