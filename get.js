const get = (arr, path) => {
    let result = arr
    path = path.split(".")
    for (let i = 0; i < path.length; i++) {
        result = result[path[i]]
    }
    return result
}
