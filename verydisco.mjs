const args = process.argv[2]
let argsArr = args.split(' ')

argsArr.forEach((arg, index) => {
    let end = (Math.ceil(arg.length/2))
    let first = arg.slice(0,end)
    let last = arg.slice(end)
    argsArr[index] = last + first
})
console.log(argsArr.join(' '))