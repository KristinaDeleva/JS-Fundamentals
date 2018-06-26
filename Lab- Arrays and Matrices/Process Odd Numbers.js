function oddNumbers(arr) {
    console.log(arr.filter((e, i) => i % 2 === 1)
        .map(a => a * 2)
        .reverse()
        .join(' '))
}
oddNumbers([10, 15, 20, 25])
oddNumbers([3, 0, 10, 4, 7, 3])