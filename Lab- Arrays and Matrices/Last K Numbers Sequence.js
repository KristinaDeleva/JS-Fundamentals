function lastNumbers(n, k) {
    let result = [1]
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k)
        let sum = result.slice(start, i)
            .reduce((a, b) => a + b)
        result.push(sum)
    }
    console.log(result.join(' '))
}
lastNumbers(6, 3)
lastNumbers(8, 2)