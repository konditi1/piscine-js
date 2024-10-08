function deepFreeze (...objs){
    for (let key in objs){
        key.freeze
    }
}
const escapeStr = "\` \\ \/ \" '"
// console.log(escapeStr)

const arr = [4, '2']
// console.log(arr)

const obj = {
    str : "string",
    num  : 85,
    bool : false,
    undef : undefined,
}
// console.log(obj)

const nested = {
    arr : [4, undefined, '2'],
    obj : {
        str : "string",
        num : 4,
        bool : true,
    }
}
Object.freeze(obj);
Object.freeze(arr);
Object.freeze(nested);
Object.freeze(nested.obj);
Object.freeze(nested.arr);