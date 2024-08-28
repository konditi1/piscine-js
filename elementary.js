const multiply = (a, b) => {
    let result = 0;

    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result
}

const divide = (a, b) => {
    let count = 0;

    while (a >= 0) {
        a -= b
        count++
    }
    return count-1
}

const modulo = (a, b) => {
    return (a - multiply(idiv(a, b), b))
}

console.log(multiply(2, 3))