function ajaxValidate(arr) {
    let last = arr.pop()

    for (let i = 0; i < arr.length; i+=3) {
        let methodPat = /Method:\s+(GET|POST|PUT|DELETE)$/g
        let credentialsPat =/Credentials:\s(Basic|Bearer)\s([a-zA-Z0-9]+)$/g
        let contentPat = /Content:\s([a-zA-Z0-9.]+)$/g

        let method = methodPat.exec(arr[i])
        let credential = credentialsPat.exec(arr[i + 1])
        let content = contentPat.exec(arr[i + 2])

        if (!method || !credential || !content){
            console.log('Response-Code:400')
            continue
        }

        method = method[1]
        credential = credential[1]

        let authorizationType = credential[1]
        let token = credential[2]

        if (method !== 'GET' && authorizationType === 'Basic'){
            console.log(`Response–Method:${method}&Code:401`)
            continue
        }

        let hashPat = /(\d+)([A-Za-z])/g
        let hash = hashPat.exec(last)
        let isValide = false
        while (hash){
            let num = Number(hash[1])
            let letter = new RegExp(`${(hash[2])}`, 'g')
            let count = 0
            let exec

            while (exec = letter.exec(token)){
                count++
            }

            if (count === num){
                isValide = true
                console.log(`Response–Method:${method}&Code:200&Header:${token}`)
                break;
            }
            hash = hashPat.exec(last)
        }

        if (!isValide){
            console.log(`Response–Method:${method}&Code:403`)
        }
    }
}
ajaxValidate(['Method: GET',
'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
'Content: users.asd.1782452.278asd',
'Method: POST',
'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
'Content: Johnathan',
'2q'])