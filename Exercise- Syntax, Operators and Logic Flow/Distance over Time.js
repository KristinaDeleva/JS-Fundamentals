function distance(arr) {
    let distance1 = (arr[0] / 3.6) * arr[2]
    let distance2 = (arr[1] / 3.6) * arr[2]
    let delta = Math.abs(distance1 - distance2)
    console.log(delta)
}

distance([5, -5, 40])