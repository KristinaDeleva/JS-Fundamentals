function calcCone(r, h) {
    let s = Math.sqrt(r * r + h * h)
    let volume = Math.PI * r * r * h / 3
    console.log("volume = " + volume)
    let area = Math.PI * r * (r + s)
    console.log("area = " + area)
}
calcCone(3.3, 7.8)