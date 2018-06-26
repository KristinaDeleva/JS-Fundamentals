function matches(text) {
    let arr = text.match(/\w+/g)
    console.log(arr.join('|'))
}
matches('A Regular Expression needs to have the global ' +
    'flag in order to match all occurrences in the text')
matches('_(Underscores) are also word characters')