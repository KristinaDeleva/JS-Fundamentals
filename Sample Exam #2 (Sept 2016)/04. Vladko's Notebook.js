function vladkoNotebook(arr) {
    let result = {}

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split('|')
        let color = line[0]
        if (!result.hasOwnProperty(color)){
            result[color] = {age: -1, name:'', opponents: [], win: 1, loss: 1}
        }

        if (line[1]==='win' || line[1]==='loss'){
            line[1] === 'win' ? result[color].win = result[color].win + 1 :
                result[color].loss = result[color].loss + 1
            result[color].opponents.push(line[2])
        }else if (line[1] === 'name'){
            result[color].name = line[2]
        }else if (line[1] === 'age'){
            result[color].age = line[2]
        }
    }

    for (let color in result) {
        if (result[color].name === '' || result[color].age === -1){
            delete result[color]
            continue
        }
        result[color].opponents.sort()
    }

    let sortedColor = [...Object.keys(result).sort()]

    let notebook = {}

    for (let color of sortedColor) {
        notebook[color] = {age: 0, name: "", opponents: [], rank:''}
        notebook[color].age = result[color].age
        notebook[color].name = result[color].name
        notebook[color].opponents = result[color].opponents
        let rank = result[color].win / result[color].loss
        notebook[color].rank = rank.toFixed(2)
    }

    console.log(JSON.stringify(notebook))
}
vladkoNotebook(['purple|age|99\n',
'red|age|44',
'blue|win|pesho',
'blue|win|mariya',
'purple|loss|Kiko',
'purple|loss|Kiko',
'purple|loss|Kiko',
'purple|loss|Yana',
'purple|loss|Yana',
'purple|loss|Manov',
'purple|loss|Manov',
'red|name|gosho',
'blue|win|Vladko',
'purple|loss|Yana',
'purple|name|VladoKaramfilov',
'blue|age|21',
'blue|loss|Pesho'])