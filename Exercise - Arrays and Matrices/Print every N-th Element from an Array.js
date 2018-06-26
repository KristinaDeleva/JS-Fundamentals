function elements(arr) {
    let steps = Number(arr.pop())
    let elements = ''
    let result = []
    for (let i = 0; i < arr.length; i+=steps) {
        elements = arr[i]
        result.push(elements)
    }
    console.log(result.join('\n'))
}
//elements(['5', '20', '31', '4', '20', '2'])
elements(['dsa', 'asd', 'test', 'tset', '2'])