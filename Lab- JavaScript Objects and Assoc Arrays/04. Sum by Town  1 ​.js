function sums(str) {
    let sum = {}
    for (let i = 0; i < str.length; i+=2) {
        let [town, income] = [str[i], Number(str[i + 1])]
        if (sum[town] === undefined){
            sum[town] = income
        }else {
            sum[town] += income
        }
    }
    return JSON.stringify(sum)
}

console.log(sums(['Sofia',
    20,
    'Varna',
    3,
    'Sofia',
    5,
    'Varna',
    4]));