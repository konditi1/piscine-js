const indexOf = (arr, val, start = 0) => {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1
}

const  lastIndexOf = (arr, val, start = 0) => {
    let index = -1
    for (i = start; i < arr.length; i++) {
        if (arr[i] === val) {
            index = i
        }
    }
    return index
}

const include = (arr, val, start = 0) => {
    while (start < arr.length) {
        if (arr[start] === val) {
            return true
            start++
        }
    }
    return false
}
