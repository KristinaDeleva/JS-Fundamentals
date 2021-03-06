function diagonalSums(matrix) {
    let normal = 0
    let back = 0
    for (let row = 0; row < matrix.length; row++) {
        normal += matrix[row][row]
        back += matrix[row][matrix[row].length - 1 - row]
    }
    console.log(normal, back)
}
diagonalSums(
    [
        [20, 40],
        [10, 60]
    ]
)