const letterSpaceNumber = (str) => {
    let result = [];
    arr = str.split(",");
    let regex = /\s\d?/
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i].match(regex)) && (arr[i].match(regex)[0] !== " ")) {
            result.push(arr[i][0]+ " "+ arr[i].match(regex)[0])
        }
    }
    return result
}
