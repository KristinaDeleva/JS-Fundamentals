function rossetta(arr) {
    let n = Number(arr.shift())
    let template = []

    for (let i = 0; i < n; i++) {
        let takeLine = arr.shift().split(/\s+/).map(Number)
        template.push(takeLine)
    }

    let matrix = []

    for (let i = 0; i < arr.length; i++) {
        let takeElement = arr[i].split(/\s+/).map(Number)
        matrix.push(takeElement)
    }

    let rows = template.length
    let cols = template[0].length

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] += template[row % rows][col % cols]
        }
    }

    let alphabeth = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    alphabeth.unshift(' ')
    let message = ''

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let num = matrix[row][col]
            message += alphabeth[num % 27]
        }
    }
    console.log(message)
}
rossetta([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ])