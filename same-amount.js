const sameAmount = (str, regEx1, regEx2) => {
    let result1 = str.match(regEx1) || []
    let result2 = str.match(regEx2) || []

    if (result1.length === 0 && result2.length === 0) {
        return true;
    }

    
    return result1.length === result2.length
}
// console.log(!sameAmount("qqqqqqq", /q /, /qqqqqqq/))