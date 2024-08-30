const pyramid = (str, num) => {
    let result = ""
    let k = 0;
    const strLength = str.length;

    for (let i = 1; i <= num; i++) {
        let temp = '';
      
        // Add spaces
        for (let j = 1; j <= (num - i) * strLength; j++) {
          temp += " ";
        }
        while (k !== (2*i-1)) {
            temp += str
            k++
        }

        k = 0
        result += temp;
        if (i < num) {
            result += "\n"
        }
    }
return result
}

    console.log(pyramid('{}', 12))