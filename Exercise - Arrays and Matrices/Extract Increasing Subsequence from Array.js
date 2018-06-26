function extracts(arr) {
    let max = Number.NEGATIVE_INFINITY;
    let size = arr.length;

    for(let i=0; i< size; i++) {
        let currentNumber = arr.shift();
        if(currentNumber >= max) {
            max = currentNumber;
            console.log(currentNumber);
        }
    }
}
extracts([1, 3, 8, 4, 10, 12, 3, 2, 24])