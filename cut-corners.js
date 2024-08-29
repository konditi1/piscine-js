const round = numbers => {
    let roundArr= []
    for (let num of numbers) {
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
            roundArr.push(-num)
        } else {
            roundArr.push(num)
        }
    }
    return roundArr
}

const ceil = numbers => {
    let ceilArr= []
    for (let num of numbers) {
        if (num < 0) {
            num = parseint(num)
            ceilArr.push(num)
        } else {
            if (num - parseint(num) > 0) {
                num = parseint(num) + 1
            } else {
                num = parseint(num)
            }
            ceilArr.push(num)
        }

    }
    return ceilArr
}

const floor = numbers => {
    let floorArr = []
    for (let num of numbers) {
        if (num < 0) {
        floorArr.push(parseint(num) - 1)            
        } else {
            floorArr.push(parseint(num))
        }
    }
    return floorArr
}

const trunc = numbers => {
    let truncArr = []
    for (let num of numbers) {
        truncArr.push(parseint(num))
    }
    return truncArr
}


const parseint = num =>{
    if ((num).toFixed() - num > 0) {
        return (num).toFixed() - 1
    }
   return (num).toFixed()
} 


console.log(parseint(5.898))