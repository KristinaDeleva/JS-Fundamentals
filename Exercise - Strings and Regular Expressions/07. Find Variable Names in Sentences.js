function find(str) {
    let pattern = /\b(?:_)([a-zA-Z0-9]*)\b/g
    let result = []
    let exec = pattern.exec(str)

    while (exec){
        result.push(exec[1])
        exec = pattern.exec(str)
    }
    console.log(result.join(','))
}
find('The _id and _age variables are both integers.')
find('Calculate the _area of the _perfectRectangle object.')
find('__invalidVariable _evenMoreInvalidVariable_ _validVariable')