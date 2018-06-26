function gladiator(lostCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalSum = 0
    for (let i = 1; i <= lostCount; i++) {
        if (i % 2 === 0){
            totalSum += helmetPrice
        }
        if (i % 3 === 0){
            totalSum += swordPrice
        }
        if (i % 6 === 0){
            totalSum += shieldPrice
        }
        if (i % 12 === 0){
            totalSum += armorPrice
        }
    }
    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`)
}
gladiator(7, 2, 3, 4, 5)
gladiator(23, 12.50, 21.50, 40, 200)