function travelling(arr) {
    let result = {}
    for (let str of arr) {
        let [country, town, cost] = str.split(' > ')
        cost = Number(cost)
        town = town[0].toLocaleUpperCase() + town.substr(1)

        if (!result.hasOwnProperty(country)){
            result[country] = {}
        }
        if (!result[country].hasOwnProperty(town)){
            result[country][town] = cost
        }
        if (cost < result[country][town]){
            result[country][town] = cost
        }
    }

    let sorted = Object.keys(result).sort()

    for (let country of sorted) {
        let output = `${country} ->`
        let inner = Object.keys(result[country]).sort(function(x, y){
            return result[country][x] - result[country][y]
        })
        for (let town of inner) {
            output += ` ${town} -> ${result[country][town]}`
        }
        console.log(output)
    }
}
travelling(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]

)