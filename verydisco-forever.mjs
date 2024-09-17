import fs from 'fs'

const args = process.argv[2]
let argsArr = args.split(' ')

argsArr.forEach((arg, index) => {
    let end = (Math.ceil(arg.length/2))
    let first = arg.slice(0,end)
    let last = arg.slice(end)
    argsArr[index] = last + first
})
argsArr = argsArr.join(' ')

fs.writeFile('verydisco-forever.txt', argsArr, 'utf-8', (err) => {
    if (err) throw err
})
