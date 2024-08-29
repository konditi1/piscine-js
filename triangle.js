const triangle = (str, num) => {
    for(let row = 1; row <= num; row++) {
        let result ="";
        for(let col = 0; col < row; col++) {
            result += str
        }
        console.log(result)
    }
}
