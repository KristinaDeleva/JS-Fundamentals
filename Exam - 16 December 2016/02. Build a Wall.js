function builds(arr) {
    arr = arr.map(x => Number(x))
    let cubic = 1900
    let foot = 1
    let total = 0
    let daylis = []
    arr = arr.filter(x => x < 30)

    while (arr.length){
        let dayUsed = 0
        arr.forEach(x => dayUsed += 195)
        arr = arr.map(x => x += foot).filter(x => x !== 30)
        daylis.push(dayUsed)
        total += dayUsed * cubic
    }
    console.log(daylis.join(', '))
    console.log(`${total} pesos`)
}
builds(['21', '25', '28'])