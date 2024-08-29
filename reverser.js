const reverse = arr => {
    let result = []
    for (const val of arr) {
        result.unshift(val)
    }
    return result
}
