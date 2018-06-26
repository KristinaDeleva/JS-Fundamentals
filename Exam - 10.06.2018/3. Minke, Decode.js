function decodings(arr) {
    let start = Number(arr.shift())
    let end = Number(arr.shift())
    let rightWord = arr.shift()
    let text = arr.shift()
    let pattern = /[A-Z][a-zA-Z]+[A-Z]/

    let[result] = pattern.exec(text)
    let country = result.substr(0, start)+rightWord.toLocaleLowerCase()
    +result.substr(end + 1).toLocaleLowerCase()
    pattern = /(\d{3}\.?\d*)/gm

    let exec
    let ascii = []

    while (exec = pattern.exec(text)){
        ascii.push(Math.ceil(Number(exec[1])))
    }

    let city = String.fromCharCode(ascii.shift()).toLocaleUpperCase()

    for (let el of ascii) {
        city += String.fromCharCode(el)
    }
    console.log(`${country} => ${city}`)
}
decodings(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"])