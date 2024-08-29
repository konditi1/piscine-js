const triangle = (str, num) => {
    let result = "";
    for(let row = 1; row <= num; row++) {
        let tria ="";
        for(let col = 0; col < row; col++) {
            tria += str
        }
        result += tria 
        if (row < num) {
            result += "\n"
        }
    }
    return result
}

console.log(triangle('*', 5))