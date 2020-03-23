let args = process.argv.slice(2)

const [string] = args

const { formatting } = require("./formatting")
const showHelp = require("./messaging")
const { capitalizeInitial } = require("./formatting")


showHelp(args)
formatting(string)
capitalizeInitial(string)


// const word = "  hhass              aslalsl   "
// const trimmedWords = word.trim("")

// console.log(trimmedWords)