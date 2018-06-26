function rotates(arr) {
    let rotations = Number(arr.pop())
    rotations %= arr.length

    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop())
    }
    console.log(arr.join(' '))
}
rotates(['Banana', 'Orange', 'Coconut', 'Apple', '15'])