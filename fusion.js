const fusion = (...args) => {
    const result = {}
    for (let arg of args) {
        for (let [key, val] of Object.entries(arg)) {
            if (!result[key]) {
                result[key] = val
            } else if (typeof result[key] !== typeof val) {
                result[key] = val
            } else {
                if (!result[key]) {
                    result[key] = []
                }
                if (Array.isArray(val)) {
                    result[key] = [...result[key], ...arg[key]]
                } else if (typeof val === "string") {
                    result[key] = (`${result[key]} ${arg[key]}`).trimStart()
                }  else if (typeof val === "number") {
                    result[key] = Number(result[key]) + Number(arg[key])
                } else if ((typeof val === "object") && (Array.isArray(val) === false)) {
                    result[key] = fusion(result[key], arg[key])
                }
            }   
        }
    }

    return result
}
// console.log(fusion({ arr: [2] }, {arr: [1, "2"] }))
// console.log(fusion({ str: "salem" }, { arr: [1, "2"] }, { arr: [4, "7", "8"] }))
// console.log(fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }))
// console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }))
// console.log(fusion({ str: "salem" }, { str: "alem" }))
// console.log(fusion(fusion({ str: "salem" }, { str: "" })))
// console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }))
// console.log(fusion({ a: "hello", b: [] }, { a: 4 }))
// console.log(fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } }))