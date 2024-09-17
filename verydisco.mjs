import { argv } from "node:process";

const veryDisco = (arg) => {
    let half = Math.ceil(arg.length / 2);
    return arg.slice(half) + arg.slice(0, half);
};

if (argv.length > 2) {
    let str = argv.slice(2).join(" "); 
    let arr = str.split(" "); 

    for (let i in arr) {
        let w = arr[i];
        let half = Math.ceil(w.length / 2);
        let first = w.slice(0, half);
        let last = w.slice(half);
        arr[i] = last + first;
    }

    console.log(arr.join(" "));
}
