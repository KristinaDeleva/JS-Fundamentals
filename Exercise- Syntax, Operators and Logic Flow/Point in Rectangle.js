function pointRectangle(arr) {
    let x = arr[0]
    let y = arr[1]
    let xMin = arr[2]
    let xMax = arr[3]
    let yMin = arr[4]
    let yMax = arr[5]
    if(x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log("inside")
    }else {
        console.log("outside")
    }
}
pointRectangle([8, -1, 2, 12, -3, 3])
pointRectangle([12.5, -1, 2, 12, -3, 3])
