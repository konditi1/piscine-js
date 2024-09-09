const invert = (obj) => {
    let newObj = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[obj[key]] = key
        }
    }
    return newObj
}

console.log(invert({ a: 1, b: 2, c: 3,__proto__: { d: 6 } }))