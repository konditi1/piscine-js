const reverse = arg => {
    if (Array.isArray(arg)) {
        let result = []
        for (const val of arg) {
            result.push(val)
        }
        return result
    }

    if (typeof arg === "string") {
        let result = ""
        let i = arg.length -1
        for (;i >= 0; i--) {
            result += arg[i]
        }
        return result
    }
}
