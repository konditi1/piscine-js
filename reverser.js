const reverse = arg => {
    if (Array.isArray(arg)) {
        let result = []
        for (const val of arg) {
            result.unshift(val)
        }
        return result
    }

    if (typeof arg === "string") {
        let revStr = ""
        let i = arg.length -1
        for (;i >= 0; i--) {
            revStr += arg[i]
        }
        return revStr
    }
}

console.log(reverse("1, 2, 3"))