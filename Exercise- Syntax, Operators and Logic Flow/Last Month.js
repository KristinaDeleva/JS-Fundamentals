function lastDay(arr) {
    let day = arr[0]
    let month = arr[1]
    let year = arr[2]
    let date = new Date(year, month - 1, 0)
    console.log(date.getDate())
}
lastDay([13, 12, 2004])