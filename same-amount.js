const sameAmount = (str, regEx1, regEx2) => {
    let result1 = str.match(regEx1) || []
    let result2 = str.match(regEx2) || []

    console.log("Pattern 1 matches:", result1);
    console.log("Pattern 2 matches:", result2);
    console.log(str)

    return result1.length === result2.length
}
