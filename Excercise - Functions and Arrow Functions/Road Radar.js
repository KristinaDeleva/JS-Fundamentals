function roadRadar(arr) {
    let speed = arr[0]
    let limit = arr[1]
    function getLimit(limit) {
        switch (limit) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
        }
    }
    let overSpeed = getLimit(limit) - speed
    if(overSpeed < 0) {
        if(overSpeed >= -20) {
            console.log('speeding')
        }else if(overSpeed >= -40) {
            console.log('excessive speeding')
        }else {
            console.log('reckless driving')
        }
    }
}

roadRadar([40, 'city'])