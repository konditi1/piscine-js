function map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}


function flatMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let mappedValue = callback(arr[i], i, arr);
        result = result.concat(mappedValue);
    }
    return result;
}
