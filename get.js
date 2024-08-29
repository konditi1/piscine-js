const get = (arr, path) => {
    let result = arr
    path = path.split(".")
    for (let i = 0; i < path.length; i++) {
        if (result[path[i]] === undefined) {
            return undefined
        }
        result = result[path[i]]
    }
    return result
}


console.log(get({ nested: { key: 'value' } }, 'nx.nx'))