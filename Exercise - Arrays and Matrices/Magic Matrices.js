function magics(matrix) {
    let sumRow = matrix[0].reduce((a, b) => a + b)

    for (let row = 0; row < matrix.length; row++) {
        let sumCol = 0
        for (let col = 0; col < matrix.length; col++) {
            sumCol += matrix[row][col]
        }

        if (sumCol !== sumRow) {
            console.log(false)
            return
        }
    }

    console.log(true)
}
magics(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
)
magics(
    [
        [11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]
    ]
)