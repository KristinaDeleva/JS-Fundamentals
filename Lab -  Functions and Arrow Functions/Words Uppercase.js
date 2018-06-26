function upperCase(words) {
    console.log(words.split(/\W+/).filter(w => w !== '')
        .map(w => w.toUpperCase()).join(', '))
}
upperCase('Hi, how are you?')