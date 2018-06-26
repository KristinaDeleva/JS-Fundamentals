function trip(arr) {
    let[x1, y1, x2, y2, x3, y3] = arr
    let distanceBetweenPoints = (x1,y1,x2,y2) => Math.sqrt((x2 - x1)*(x2-x1) +
    (y2 - y1)*(y2-y1))

    let distance123 = distanceBetweenPoints(x1,y1,x2,y2) +
        distanceBetweenPoints(x2,y2,x3,y3)
    let distance132 = distanceBetweenPoints(x1,y1,x3,y3) +
        distanceBetweenPoints(x3,y3,x2,y2)
    let distance213 = distanceBetweenPoints(x2,y2,x1,y1) +
        distanceBetweenPoints(x1,y1,x3,y3)

    let shortDistance = Math.min(distance123,distance132,distance213)

    if(shortDistance === distance123) {
        console.log(`1->2->3: ${shortDistance}`)
        return
    }if(shortDistance === distance132) {
        console.log(`1->3->2: ${shortDistance}`)
        return
    }if(shortDistance === distance213) {
        console.log(`2->1->3: ${shortDistance}`)
        return
    }
}

console.log(trip([0, 0, 2, 0, 4, 0]));
console.log(trip([5, 1, 1, 1, 5, 4]));
console.log(trip([-1, -2, 3.5, 0, 0, 2]));