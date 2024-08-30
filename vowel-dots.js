const vowels = /[aeiou]/gi
const vowelDots = str => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (vowels.test(str[i])) {
            result += "."
        }
        result += str[i]
    }
    return result
}
