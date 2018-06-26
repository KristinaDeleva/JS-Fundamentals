function gradsToDegrees(grad) {
    grad = grad % 400
    let degree = grad * 0.9
    if(degree < 0) {
        console.log(degree + 360);
    }else {
        console.log(degree)
    }
}
gradsToDegrees(850)