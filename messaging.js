module.exports = (message) => {
    if (message.includes("--help")) {
        console.log(`How to use this program:
            \t1.When you input a new string with more than 1 space the program will sanitize it.
        \t2.If you typed the name of a city without capitalization the program will capitalize it.
        \t3.If you included a Capitalized letter inside the wrong place of your string the program will sanitize it.`)
    }
}