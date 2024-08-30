const sameAmount = (str, regEx1, regEx2) => {
    let result = str.match(regEx1)
    if (result === null) {
        return false
    }
    let result2 = str.match(regEx2)
    if (result2 === null) {
        return false
    }
    return result.length === result2.length
}
