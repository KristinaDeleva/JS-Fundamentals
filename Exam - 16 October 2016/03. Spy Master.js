function spy(arr) {
    let key = arr.shift()
    let pattern = new RegExp(`(^|\\s)(${key})(\\s+[A-Z!%$#]{8,})(\\.|\\,|\\s|$)`, `gmi`)

    for (let i = 0; i < arr.length; i++) {
        let match = arr[i].replace(pattern, function (match, g1, g2, g3, g4) {
            let message = g3
            if (message.match(/\s+[A-Z!%$#]{8,}/)){
                message = message.replace(/!/g, '1')
                    .replace(/%/g, '2')
                    .replace(/#/g, '3')
                    .replace(/\$/g, '4')
                    .toLowerCase()
            }
            return g1 + g2 + message + g4
        })

        if (match){
            console.log(match)
        }else {
            console.log(arr[i])
        }
    }
}
spy(['specialKey',
'In this text the specialKey HELLOWORLD! is correct, but',
'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'])