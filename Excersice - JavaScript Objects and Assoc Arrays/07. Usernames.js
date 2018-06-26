function userNames(arr) {
    let names = new Set()

    for (let name of arr) {
        names.add(name)
    }

    Array.from(names.keys()).sort((a, b) => users(a, b))
        .forEach(n => console.log(n))

    function users(a, b) {
        if (a.length !== b.length){
            return a.length - b.length
        }else {
            return a.localeCompare(b)
        }
    }

}
userNames(['Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston'])