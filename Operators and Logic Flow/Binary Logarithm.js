function binary(arr) {
    for (let index in arr) {
        console.log(Math.log2(arr[index]))
    }
}
binary([1,2,3,5,6])