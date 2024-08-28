const imul = (a, b) => {
    let result = 0;

    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result
}

const idiv = (a, b) => {
    let count = 0;

    while (a >= 0) {
        a -= b
        count++
    }
    return count-1
}

const imod = (a, b) => {
    return (a - imul(idiv(a, b), b))
}
