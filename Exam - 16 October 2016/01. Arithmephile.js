function solve(arr) {
    arr = arr.map(Number)
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]

        if (num >= 0 && num < 10){
            let sum = 1
            for (let j = 1; j <= num; j++) {
                sum = sum * arr[i + j]
            }
            result.push(sum)
        }
    }

    result.sort((a, b) => b - a).filter((a, i) => {
        if (i === 0){
            console.log(a)
        }
    })

}
solve(['10', '20', '2', '30', '44', '3', '56', '20', '24'])