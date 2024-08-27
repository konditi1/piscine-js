const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
  }

  
const get = (key) => sourceObject[key]

const set = (key, value) => {
    sourceObject[key] = value
    return value
}

// console.log(get("str"))
// console.log(set("name", "james"))