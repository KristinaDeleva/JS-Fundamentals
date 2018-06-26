function heroicInventory(arr) {
    let hero = []
    for (let i = 0; i < arr.length; i++) {
        let currentArguments = arr[i].split(' / ')
        let names = currentArguments[0]
        let levels = Number(currentArguments[1])
        let currentItems = []
        if (currentArguments.length > 2){
            currentItems = currentArguments[2].split(', ')
        }
        let heroes = {
            name: names,
            level: levels,
            items: currentItems
        }
        hero.push(heroes)
    }
    console.log(JSON.stringify(hero))
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])