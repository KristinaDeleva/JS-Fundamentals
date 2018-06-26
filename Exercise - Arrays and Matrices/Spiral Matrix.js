function spiral(rows, cols) {
    let counter = 0;
    let target = rows * cols;
    let minRow = 0;
    let minCol = 0;
    let maxRow = rows - 1;
    let maxCol = cols - 1;

    let matrix = [];
    for (let r = 0; r < rows; r++) matrix[r] = [];

    while (counter < target) {
        //top row
        for (let c = minCol; c <= maxCol && counter < target; c++) {
            matrix[minRow][c] = ++counter;
    }
        minRow++;
        //right down col
        for (let r = minRow; r <= maxRow && counter < target; r++) {
            matrix[r][maxCol] = ++counter;
        }
        maxCol--;
        //left down row
        for (let c = maxCol; c >= minCol && counter < target; c--) {
            matrix[maxRow][c] = ++counter;
        }
        maxRow--;
        //left up col
        for (let r = maxRow; r >= minRow && counter < target; r--) {
            matrix[r][minCol] = ++counter;
        }
        minCol++;
    }

    matrix.forEach(row => console.log(row.join(' ')));
}
spiral(5, 5)