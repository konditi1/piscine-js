const sameAmount = (str, regEx1, regEx2) => {
    let result = str.match(regEx1)[0]
    if (result === null) {
        return false
    }
    let result2 = str.match(regEx2)[0]
    if (result2 === null) {
        return false
    }
    console.log(result, result2)

    if (result === result2) {
        return true
    }
}
