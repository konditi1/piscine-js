const sameAmount = (str, regEx1, regEx2) => {
    const globalRegEx1 = new RegExp(regEx1.source, regEx1.flags.includes('g') ? regEx1.flags : regEx1.flags + 'g');
    const globalRegEx2 = new RegExp(regEx2.source, regEx2.flags.includes('g') ? regEx2.flags : regEx2.flags + 'g')
    console.log(regEx1, regEx2)

    let result1 = str.match(globalRegEx1) || []
    let result2 = str.match(globalRegEx2) || []


    return result1.length === result2.length
}

console.log(sameAmount('I like apples and bananas', /a/, /b/))