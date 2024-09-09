const invert = (obj) => {
    let newObj = {}
    for (let key in obj) {
        newObj[obj[key]] = key
    }
    return newObj
}

console.log(invert({ a: 1, b: 2, c: 3 }))