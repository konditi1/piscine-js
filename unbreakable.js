const join = (arr, sep = ",") => {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === undefined)  || (arr[i] === null)) {
            arr[i] = "";
        }
        result += arr[i];
        if (i < arr.length - 1) {
            result += sep
        }
    }
    return result
}

const split = (str, sep = undefined, limit = str.length) => {
    if (limit > str.length) {
        limit = str.length
    }
    
    if (limit === 0) {
        return []
    }
    
    if (sep == "") {
        let result = [];
        for (let i = 0;  i < limit; i++) {
            result.push(str[i])
        }
        return result
    }

    if (sep === undefined) {
        return new Array(str)
    }

    if ((sep !== undefined) && (!str.includes(sep))) {
            return new Array(str)
    }

    let result = [];
    let temp = "";
    let i = 0;
    while (i < limit) {
        if ((i + sep.length <= limit) && (str.slice(i, i + sep.length) === sep)) {
            result.push(temp)
            temp = ""
            i += sep.length
        } else {
            temp += str[i]
            // console.log(str[i])
            i++
        }
    }
    result.push(temp)

    return result

}

console.log(split('ee,ff,g,', ','))