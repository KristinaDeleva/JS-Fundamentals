function evenPosition(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if(i % 2 === 0) {
            result.push(arr[i])
        }
    }
    console.log(result.join(' '))
}
evenPosition(['20', '30', '40'])
evenPosition(['5', '10'])