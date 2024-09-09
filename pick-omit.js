const pick = (obj, keys) => {
    let newObj = {}
    let keyArr = []
    if (typeof keys === "string") {
        keyArr = [keys] 
    } else if (Array.isArray(keys)) {
        keyArr = keys
    }
    for (let key of keyArr) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
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

console.log(pick({ a: 1, b: 2, acb: 3 }, "acb"))
console.log(omit({ a: 1, b: 2, c: 3 }, 'acb'))