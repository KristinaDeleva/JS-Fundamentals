function extract(text) {
    let result = []
    let start = text.indexOf('(')
    let end = text.indexOf(')', start + 1)
    while (start > - 1 && end > - 1){
        result.push(text.substring(start + 1, end))
        start = text.indexOf('(', start + 1)
        end = text.indexOf(')', end + 1)
    }
    console.log(result.join(', '))
}
extract('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')