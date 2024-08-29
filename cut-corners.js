const round = numbers => {
    let roundArr= []
    for (let num of numbers) {
        let neg = false
        if (num < 0) {
            neg = true
            num = -num
        }

        if (num - parseInt(num) >= 0.5) {
            num = parseInt(num) + 1
        } else {
            num = parseInt(num)
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
            num = parseInt(num)
            ceilArr.push(num)
        } else {
            if (num - parseInt(num) > 0) {
                num = parseInt(num) + 1
            } else {
                num = parseInt(num)
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
        floorArr.push(parseInt(num) - 1)            
        } else {
            floorArr.push(parseInt(num))
        }
    }
    return floorArr
}

const trunc = numbers => {
    let truncArr = []
    for (let num of numbers) {
        truncArr.push(parseInt(num))
    }
    return truncArr
}

console.log(trunc([3.7, -3.7, 3.1, -3.1]))