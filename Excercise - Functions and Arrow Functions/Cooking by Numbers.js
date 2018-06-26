function cooking(arr) {
    let start = arr[0]
    let chop = x => x / 2
    let dice = x => Math.sqrt(x)
    let spice = x => ++x
    let bake = x => x * 3
    let fillet = x => x * 0.8

    for (let i = 1; i <= 5; i++) {
        switch (arr[i]) {
            case 'chop':
                start = chop(start)
                console.log(start)
                break;
            case 'dice':
                start = dice(start)
                console.log(start)
                break;
            case 'spice':
                start = spice(start)
                console.log(start)
                break;
            case 'bake':
                start = bake(start)
                console.log(start)
                break;
            case 'fillet':
                start = fillet(start)
                console.log(start)
                break;
        }
    }
}

console.log(cooking([9, 'dice', 'spice','chop', 'bake', 'fillet']));