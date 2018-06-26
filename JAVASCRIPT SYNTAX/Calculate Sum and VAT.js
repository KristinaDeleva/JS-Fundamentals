function calcSum(input) {
    let sum = 0
    for (let num of input) {
       sum += num
    }
    console.log("Sum = " + sum)
    console.log("VAT = " + sum * 0.20)
    console.log("total = " + sum * 1.20)
}
calcSum([1.20, 2.60, 3.50])