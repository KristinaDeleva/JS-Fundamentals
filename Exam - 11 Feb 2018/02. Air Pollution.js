function pollutions(matrix, arr) {
    let mat = [];
    matrix.forEach(line => mat.push(line.split(" ").map(Number)));

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(" ").filter(e => e !== "").filter(e => e.trim());
        let [force, indexValue] = line;
        indexValue = Number(indexValue);

        if (force === "breeze") {
            for (let col = 0; col < mat[indexValue].length; col++) {
                greaterThanZero(indexValue, col, 15);
            }
        }
        if (force === "gale") {
            for (let row = 0; row < mat.length; row++) {
                greaterThanZero(row, indexValue, 20);
            }
        }
        if (force === "smog") {
            for (let row = 0; row < mat.length; row++) {
                for (let col = 0; col < mat[row].length; col++) {
                    mat[row][col] += indexValue;
                }
            }
        }
    }

    let pollution = [];
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[row].length; col++) {
            if (mat[row][col] >= 50) {
                pollution.push(`[${row}-${col}]`);
            }
        }
    }
    if (pollution.length > 0) {
        console.log(`Polluted areas: ` + pollution.join(", "));
    }else{
        console.log(`No polluted areas`);
    }

    function greaterThanZero(row, col, value) {
        if (mat[row][col] - value >= 0) {
            return mat[row][col] -= value;
        } else {
            return mat[row][col] = 0;
        }
    }

}
pollutions([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"])