const sign = num => { 
    return num > 0 ? 1
         : num < 0 ? -1 
         : 0;
    }

const sameSign = (num1, num2) => {
    if (num1 < 0 && num2 === 0) {
        return false
    } else if (num2 < 0 && num1 === 0) {
        return false
    } else if (num1 > 0 && num2 === 0) {
        return false
    } else if (num2 > 0 && num1 === 0) {
        return false
    } else if (num1 <= 0 && num2 <= 0) {
        return true
    } else if (num1 >= 0 && num2 >= 0) {
        return true
    } else {
        return false
    }
}

console.log(!sameSign(0, -99))