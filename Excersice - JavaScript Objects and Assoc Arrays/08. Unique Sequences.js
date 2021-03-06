function sequences(input) {
    let arrSet = []
    for (let line of input) {
        let arr = JSON.parse(line)
        arrSet.push(arr.map(Number).sort((a, b) => b - a))
    }


    for (let i = 0; i < arrSet.length; i++) {
        for (let j = i + 1; j < arrSet.length; j++) {
            if (compareArr(arrSet[i], arrSet[j])){
                arrSet.splice(j , 1)
                j--
            }
        }
    }

    arrSet.sort((a, b) => a.length - b.length)
        .forEach(a => console.log('[' + a.join(', ') + ']'))

    function compareArr(arr1, arr2) {
        if (arr1.length !== arr2.length){
            return false
        }else {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]){
                    return false
                }
            }
            return true
        }
    }
}
sequences([-3, -2, -1, 0, 1, 2, 3, 4]
    [10, 1, -17, 0, 2, 13]
    [4, -3, 3, -2, 2, -1, 1, 0])