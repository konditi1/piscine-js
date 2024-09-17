import { argv } from "node:process";
const veryDisco = (arg) => {
    let half = Math.ceil(arg.length / 2)
    return arg.slice(half) + arg.slice(0, half)
}

argv.forEach((val, index) => {
    let valArr = val
    if (val.includes(" ")) {
        valArr = val.split(" ")
        valArr = valArr.map((val) => veryDisco(val)).join(" ")
        console.log(valArr)
        return
    }
    if (index > 1) {
        console.log(veryDisco(valArr));
    }
})
