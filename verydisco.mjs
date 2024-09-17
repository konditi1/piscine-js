import { argv } from "node:process";
const veryDisco = (arg) => {
    let half = Math.ceil(arg.length / 2)
    return arg.slice(half) + arg.slice(0, half)
}

argv.forEach((val, index) => {
    if (index > 1) {
        console.log(veryDisco(val));
    }
})
