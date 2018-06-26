function counts(arr) {
    let result = {}
    arr.join(' ').split(/[^\w]+/)
        .filter(a => a !== '')
        .forEach(s => {
            if (!result.hasOwnProperty(s)){
                result[s] = 0
            }
            result[s]++
        })
    console.log(JSON.stringify(result))
}
counts(['Far too slow, you\'re far too slow.'])