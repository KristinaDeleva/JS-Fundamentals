function rounding(arr) {
    let rounded = arr[0]
    let precision = arr[1]
    if(precision > 15) {
        precision = 15
    }
    rounded = rounded.toFixed(precision)
    console.log(Number(rounded))
}

rounding([10.5, 3])