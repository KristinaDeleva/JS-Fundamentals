function units(num) {
    let feet = Number.parseInt(num / 12)
    num = num % 12
    console.log(`${feet}'-${num}"`)
}
units(11)