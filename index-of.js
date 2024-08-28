/**
 * Returns the index of the first element in the array that matches the given value.
 * If the element is not found, returns -1.
 *
 * @param {Array} arr
 * @param {*} val
 * @param {number} start
 * @returns {number}
 */
const indexOf = (arr, val, start = 0) => {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1
}

/**
 * Returns the index of the last element in the array that matches the given value.
 * If the element is not found, returns -1.
 *
 * @param {Array} arr
 * @param {*} val
 * @param {number} start
 * @returns {number}
 */
const  lastIndexOf = (arr, val, start = arr.length-1) => {
        for (let i = start; i >= 0; i--) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1
}

    /**
     * Returns true if the value exists in the array, or false if not.
     * @param {Array} arr
     * @param {*} val
     * @param {number} start
     * @returns {boolean}
     */
const include = (arr, val, start = 0) => {
    while (start < arr.length) {
        if (arr[start] === val) {
            return true
            start++
        }
    }
    return false
}
