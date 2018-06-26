function spices(arr) {
    let num = Number(arr)
    let days = 0
    let total = 0
    while (num >= 100) {
        total += num
        days++
        num -= 10
        total -= 26
    }
    if (days > 0) {
        total -= 26
    }
    console.log(days)
    console.log(total)
}
spices([111])