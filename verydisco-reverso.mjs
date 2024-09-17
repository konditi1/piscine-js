import fs from 'fs'

const fileName = process.argv[2]

const content = fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the file:', err)
        return
    }
    console.log(verydisco(data))
})


const verydisco = (data) => {
    let argsArr = data.split(' ')
    argsArr.forEach((arg, index) => {
    let end = (Math.floor(arg.length/2))
    let first = arg.slice(0,end)
    let last = arg.slice(end)
    argsArr[index] = last + first
})
return argsArr.join(' ')
}