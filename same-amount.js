const sameAmount = (str, regEx1, regEx2) => {
    let result1 = str.match(regEx1)
    let result2 = str.match(regEx2)

    result1 = result1 === null ? [] : result1
    result2 = result2 === null ? [] : result2

    
    return result1.length === result2.length
}
