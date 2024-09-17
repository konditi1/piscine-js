const word = process.argv
let args = word[2]
let argsArr = args.split(' ')

for(let i in argsArr) {
    let arg = argsArr[i]
    let end = (Math.ceil(arg.length/2))
    let first = arg.slice(0,end)
    let last = arg.slice(end)
    argsArr[i] = last + first
}

console.log(argsArr.join(' '))