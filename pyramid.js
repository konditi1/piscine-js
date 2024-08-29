const pyramid = (str, num) => {
    let result = "";
    for(let row = 1; row <= num; row++) {
        let spaces = ' '.repeat(num - row);
        let stars = str.repeat(2 * row - 1);

        result += spaces + stars

        if (row < num) {
            result += "\n"
        }
    }
    return result
}

console.log(pyramid('{}', 12))