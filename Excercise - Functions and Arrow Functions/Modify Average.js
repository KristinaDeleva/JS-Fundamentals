function modify(num) {
    let numbersAsString = num.toString()
    function getAverage(numbersAsString) {
        let sum = 0
        for (let digit of numbersAsString) {
            sum += Number(digit)
        }
        return sum / numbersAsString.length
    }
    let average = getAverage(numbersAsString)
    let addNine = x => x + '9'

    while (average <= 5) {
        numbersAsString = addNine(numbersAsString)
        average = getAverage(numbersAsString)
    }
    console.log(numbersAsString)
}
modify(5835)