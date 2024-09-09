const pick = (obj, keys) => {
    let newObj = {}
    for (let key of keys) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    console.log(obj)
    return newObj
}

const omit = (obj, keys) => {
    let newObj = {}
    for (let key in obj) {
        if (!keys.includes(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

console.log(pick({ a: 1, b: 2, c: 3 }, "acb"))
console.log(omit({ a: 1, b: 2, c: 3 }, 'acb'))