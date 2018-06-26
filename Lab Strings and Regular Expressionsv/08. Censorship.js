function censorship(text, cens) {
    for (let word of cens) {
        let replaced = '-'.repeat(word.length)
        while (text.indexOf(word) > - 1){
            text = text.replace(word, replaced)
        }
    }
    console.log(text)
}
censorship('roses are red, violets are blue', [', violets are', 'red'])