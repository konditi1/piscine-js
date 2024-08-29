/**
 * Creates an array of elements split into groups the length of size. 
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * @function chunk
 * @param {Array} arr The array to chunk.
 * @param {Number} size The size of each chunk
 * @returns {Array} The chunked array
 */
const chunk = (arr, size) => {
    let twoDarr = [];
    for (let i = 0, stop = arr.length; i < stop; i += size) {
        twoDarr.push(arr.slice(i, i+size))
    }
    return twoDarr
}
