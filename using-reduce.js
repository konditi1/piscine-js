function adder(arr, value = 0) {
    return arr.reduce((acc, item) => acc + item, value);
}

function sumOrMul(arr, value = 0) {
    return arr.reduce((acc, item) => {
        if (item % 2 === 0) {
            return acc * item
        } else {
            return acc + item
        }
    }
    , value
)}

function funcExec(arr, value = 0) {
    return arr.reduce((acc, item) => typeof item === "function" ? item(acc, value) : acc, value);
}
