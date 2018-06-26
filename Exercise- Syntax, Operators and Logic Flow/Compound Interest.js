function calcInterest(arr) {
    let sum = arr[0]
    let rate = arr[1] / 100
    let frequency = 12 / arr[2]
    let years = arr[3]
    let f =  sum * Math.pow((1 + rate / frequency), frequency * years)
    console.log(f.toFixed(2))
}
calcInterest([100000, 5, 12, 25])