const first = (arg) => arg[0]

const last = (arg) => arg[arg.length-1]

const kiss = (arg) => [arg[arg.length-1], arg[0]]

console.log(kiss("abc"))