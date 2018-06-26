function bunnies(arr) {
    let bombs = arr.pop().split(/[\s,]+/g).map(Number)
    let matrix = arr.map(l => l.split(/\s+/g).map(Number))

    let snowballDmg = 0
    let count = 0

    for (let i = 0; i < bombs.length; i+=2) {
        let row = bombs[i]
        let col = bombs[i + 1]
        let damage = matrix[row][col]
        if (matrix[row][col] > 0){
            snowballDmg += damage
            count++
            for (let j = row - 1; j <= row + 1; j++) {
                for (let k = col - 1; k <= col + 1; k++) {
                    if (isInside(j, k, matrix)){
                        matrix[j][k] -= damage
                    }
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0){
                snowballDmg += matrix[i][j]
                count++
            }
        }
    }

    console.log(snowballDmg)
    console.log(count)

    function isInside(row, col, matrix) {
        return row >= 0 && row < matrix.length
            && col >= 0 && col < matrix[row].length
    }
}
bunnies(['10 10 10',
'10 10 10',
'10 10 10',
'0,0'])