const sameAmount = (str, regEx1, regEx2) => {
    let result = str.match(/regEx1/g)
    if (result === null) {
        return false
    }
    let result2 = str.match(/regEx2/g)
    if (result2 === null) {
        return false
    }
    console.log(result, result2)
    return result.length === result2.length
}
const data = "q qqqqqqqq qqqqqqqq qqqqqqqq"
console.log(!sameAmount(data, /q /, /qqqqqqq/))