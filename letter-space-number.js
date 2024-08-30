const letterSpaceNumber = (str) => {
    let result = [];
    let regex = /\b\d\b(?![a-zA-Z])/g
    
            result = str.match(regex)
            for (let i = 0; i < result.length; i++) {
                for (let j = 0; j < str.length; j++) {
                    if (str[j] === result[i]) {
                        result[i] = str[j-2] + " "+ result[i]
                    }
                }
            }

    return result
}

console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))