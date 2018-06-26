function gladiator(arr) {
    let inventory = arr.shift().split(' ')
    loop:
    for (let el of arr) {
        let[command, items] = el.split(' ')
        switch (command){
            case 'Buy':
                if (!inventory.includes(items)){
                    inventory.push(items)
                }
                break
            case 'Trash':
                let index1 = inventory.indexOf(items)
                if (index1 > -1){
                    inventory.splice(index1, 1)
                }
                break
            case 'Repair':
                let index2 = inventory.indexOf(items)
                if (index2 > -1){
                    let element = inventory.splice(index2, 1)
                    inventory.push(element[0])
                }
                break
            case 'Upgrade':
                let[realItem, upgrade] = items.split('-')
                let index3 = inventory.indexOf(realItem)
                if (index3 > -1){
                    inventory.splice(index3 + 1, 0, realItem + ':' + upgrade)
                }
                break
            case 'Fight!':
                console.log(inventory.join(' '))
                break loop
        }
    }
}
gladiator(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel',
'Fight!'])