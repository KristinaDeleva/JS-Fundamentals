function triangleOfDollars(n) {
        for (let i = 1; i <= n; i++) {
            console.log(new Array(i + 1).join('$'))
        }
}
triangleOfDollars(13)