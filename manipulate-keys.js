const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

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

const reduceKeys = (obj, callback) => {
    let result = ""
    let start = true
    for (let key in obj) {
        if (start) {
        result = key
        start = false
        continue
        }
        result = callback(result, key)
    }
    return result
}
// console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))