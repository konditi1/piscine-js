const flat = (arr, num = 1) => {
    let flatArr = []
    if (num === Infinity) {
        flatArr = arr.toString().split(",").map(elem => Number(elem))
    }
    for(let i = 0; i < num; i++) {
        flatArr = [].concat(...arr)
    }

    return flatArr
}
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(flat(arr2));