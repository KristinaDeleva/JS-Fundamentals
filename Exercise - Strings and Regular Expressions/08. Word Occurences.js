function occurences(sentence, word) {
    let counter = 0
    let pattern = new RegExp("\\b" + word + "\\b", "gi")
    let exec = pattern.exec(sentence)

    while (exec){
        counter++
        exec = pattern.exec(sentence)
    }
    console.log(counter)
}
occurences('The waterfall was so high, that the child couldn’t see its peak.',
    'the')
occurences('How do you plan on achieving that? How? How can you even think of that?'
    , 'how')
occurences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.',
    'there')