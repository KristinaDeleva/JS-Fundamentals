function biggestEl(matrix) {
    let max = Number.NEGATIVE_INFINITY
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > max) {
                max = matrix[row][col]
            }
        }
    }
    console.log(max)
}
biggestEl(
    [
    [20, 50, 10],
    [8, 33, 145]
    ]
)