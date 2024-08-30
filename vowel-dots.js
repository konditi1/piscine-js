const vowelDots = str => {
    let result = "";
    let vowels = /[aeiou]/gi
    for (let i = 0; i < str.length; i++) {
        if (vowels.test(str[i])) {
            result += "."
        }
        result += str[i]
    }
    return result
}
