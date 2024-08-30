const vowels = /[aeiou]/gi
const vowelDots = str => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i]
        if (vowels.test(str[i])) {
            result += "."
        }
    }
    return result
}
