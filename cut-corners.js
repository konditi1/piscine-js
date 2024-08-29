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


const parseint = num => {
    // Handle positive numbers
    if (num >= 0) {
        let result = 0;
        // Subtract the largest possible power of 10 and adjust result accordingly
        while (num >= 1) {
            let subtract = 1;
            let factor = 1;
            while (num >= subtract * 10) {
                subtract *= 10;
                factor *= 10;
            }
            num -= subtract;
            result += factor;
        }
        return result;
    }
    
    // Handle negative numbers
    else {
        let result = 0;
        // Add the largest possible power of 10 and adjust result accordingly
        while (num <= -1) {
            let add = 1;
            let factor = 1;
            while (num <= -add * 10) {
                add *= 10;
                factor *= 10;
            }
            num += add;
            result -= factor;
        }
        return result;
    }
};
