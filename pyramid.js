const pyramid = (str, num) => {
    let result = ""
    for (let i = 1; i <= num; i++) {
        let temp = '';
      
        // Add spaces
        for (let j = 1; j <= num - i; j++) {
          temp += ' ';
        }
      
        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
          temp += str;
        }
      
        // Print the row
        result += temp;
        if (i < num) {
            result += "\n"
        }
      }
      return result
}
// console.log(pyramid('*', 5))