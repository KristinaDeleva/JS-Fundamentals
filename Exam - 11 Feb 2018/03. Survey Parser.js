function surveis(str) {
    let data = /<svg>(.+?)<\/svg>/g
    let exec = data.exec(str)
    if (!exec){
        return 'No survey found'
    }
    data = /<cat><text>((.|\n)*)\[((.|\n)*)]((.|\n)*)<\/text><\/cat>\s*<cat>((.|\n)*)<\/cat>/g
    exec = data.exec(str)

    if (exec) {
        let label = exec[3]
        let raiting = exec[7]
        data = /<g><val>([1-9]|10)<\/val>([0-9]+)<\/g>/g
        exec = data.exec(raiting)
        if (exec) {
            let result = 0
            let count = 0
            while (exec) {
                let value = Number(exec[1])
                let vote = Number(exec[2])
                count += vote
                result += value * vote
                exec = data.exec(raiting)
            }
            result = result / count
            return `${label}: ${parseFloat(result.toFixed(2))}`
        }
    }
    return 'Invalid format'
}

console.log(surveis('<p>Some random text' +
    '</p><svg><cat><text>' +
    'ow do you rate our food? ' +
    '[Food - General]</text></cat>' +
    '<cat><g><val>1</val>0</g><g><val>2' +
    '</val>1</g><g><val>3</val>3</g><g>' +
    '<val>4</val>10</g><g><val>5</val>7' +
    '</g></cat></svg><p>Some more random text</p>'));