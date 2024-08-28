
const cutFirst = str => str.slice(2)

const cutLast = str => str.slice(0,-2)

const cutFirstLast = str => {
    str = cutFirst(str)
    str = cutLast(str)
    return str

}

const keepFirst = str => str.slice(0, 2)

const keepLast = str => str.slice(-2)

const keepFirstLast = str => {
    if (str.length <= 2) {
        return str
    }
   let  str1 = keepFirst(str)
    let str2 = keepLast(str)

    return str1 + str2
}

console.log(keepFirstLast('af'))