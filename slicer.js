/**
 * @function slice
 * @description Returns a slice of the given string between the given start and end indices.
 * @param {string} str The string to slice.
 * @param {number} [start=0] The starting index of the slice. Negative numbers are relative to the end of the string.
 * @param {number} [end=arr.length-1] The ending index of the slice. Negative numbers are relative to the end of the string.
 * @returns {string} The sliced string.
 */
const slice = (str, start = 0, end = str.length) => {
    let result = "";
    if (start < 0) {
        start += str.length
    }

    if (end < 0) {
        end += str.length
    }
    
    for (let i = start; i < end; i++) {
        result += str[i]
    }
    return result
}

console.log(slice('abcdef', 0, 2))