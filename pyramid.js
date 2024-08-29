const pyramid = (str, num) => {
    let result = "";
    for(let row = 1; row <= num; row++) {
        let pyra = "";
        let spaces = ' '.repeat(num - row);
        let stars = str.repeat(2 * row - 1);

        pyra += spaces + stars
        result += pyra

        if (row < num) {
            result += "\n"
        }
    }
    return result
}

console.log(pyramid('*', 5))