const multiply = (a, b) => {
    let result = 0;
    let arg2 = false
    let neg = false
    if (b < 0) {
        if (a > 0) {
            neg = true
        }
        arg2 = true
        b = -b
    }
    
    if (a < 0) {
        if (!arg2) {
            neg = true
        }
        a = -a
    }


    for (let i = 0; i < b; i++) {
        result += a;
    }

    if (neg) {
        return -result
    }

    if (a < 0 && b < 0) {
        return -result
    }
    return result
}

const divide = (a, b) => {
    let count = 0;
    let arg2 = false
    let neg = false
    if (b < 0) {
        if (a > 0) {
            console.log("error a > 0")
            neg = true
        }
        arg2 = true
        b = -b
    } 
    
    if (a < 0) {
        if (!arg2) {
            neg = true
        }
        a = -a
    }

    while (a >= 0) {
        a -= b
        count++
    }

    if (neg) {
        return -(count-1)
    }


    return count-1
}

/**
 * Returns the remainder of a divided by b.
 *
 * @param {number} a dividend
 * @param {number} b divisor
 * @returns {number} remainder
 */
const modulo = (a, b) => {
    let neg = false

    if (b < 0) {
        b = -b
    }

    if (a < 0) {
            neg = true
        a = -a
    }

    
    let idiv = divide(a, b)

    if (neg) { 
    return -(a - multiply(divide(a, b), b))
}
        
    return (a - multiply(divide(a, b), b))
}

console.log(modulo(123, -22))
