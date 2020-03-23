exports.formatting = (word) => {
    let word1 = word.trim()
    let newstring = word1.replace(/\s+/g, " ")
    console.log(newstring)
}

exports.capitalizeInitial = (string) => {
    let firstCap = string.split(" ").map(string => string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase()).join(" ")
    console.log(firstCap)
}