function catalogue(arr) {
    let map = new Map()

    for (let line of arr) {
        let tokens = line.split(' : ')
        let name = tokens[0]
        let price = tokens[1]
        map.set(name, price)
    }
    let set = new Set()

    Array.from(map.keys()).forEach(k => {
        return set.add(k[0])
    })

    for (let char of Array.from(set.keys()).sort()) {
        console.log(char)
        for (let product of Array.from(map.keys()).sort()) {
            if (product.startsWith(char)){
                console.log(`${product}: ${map.get(product)}`)
            }
        }
    }
}
catalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])