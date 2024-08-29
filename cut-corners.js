const round = num => {
        let neg = false
        if (num < 0) {
            neg = true
            num = -num
        }

        if (num - parseint(num) >= 0.5) {
            num = parseint(num) + 1
        } else {
            num = parseint(num)
        }

        if (neg) {
            return -num
        }
    return num
}

const ceil = num => {
        if (num < 0) {
            num = parseint(num)
            return (num)
        } else {
            if (num - parseint(num) > 0) {
                num = parseint(num) + 1
            } else {
                num = parseint(num)
            }
            return (num)
        }
}

const floor = num => {
    
        if (num < 0) {
        return (parseint(num) - 1)            
        } else {
            return (parseint(num))
        }
    }


const trunc = num => parseint(num)


const parseint = num =>{
    let result = 0;

    // For positive numbers
    if (num > 0) {
        while (num >= 1) {
            num -= 1;
            result += 1;
        }
    }
    // For negative numbers
    else if (num < 0) {
        while (num <= -1) {
            num += 1;
            result -= 1;
        }
    }
    return result;
}

console.log(ceil(-5.9))