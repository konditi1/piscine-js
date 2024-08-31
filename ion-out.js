const ionOut = str => {
    let regex = /\b\w*t(?=ion)\w*\b/g

    let matched = str.match(regex)
    if (!matched) return []

    const result = []
    for(let word of matched) {
        result.push(word.replace(/ion/, ""))
    }
    return result
}
