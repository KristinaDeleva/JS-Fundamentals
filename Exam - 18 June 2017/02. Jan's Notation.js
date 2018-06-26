function notations(arr) {
    let arrOfNum = []
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        if (typeof current === 'number'){
            arrOfNum.push(current)
        }else {
            if (arrOfNum.length < 2) {
                console.log('Error: not enough operands!')
                return
            }
            let num2 = arrOfNum.pop()
            let num1 = arrOfNum.pop()
            switch (current) {
                case '+': arrOfNum.push(num1 + num2); break;
                case '-': arrOfNum.push(num1 - num2); break;
                case '/': arrOfNum.push(num1 / num2); break;
                case '*': arrOfNum.push(num1 * num2); break;
            }
        }
    }
    if (arrOfNum.length > 1) {
        console.log('Error: too many operands!')
    }else {
        console.log(arrOfNum[0])
    }
}
notations([5, 3, 4, '*', '-'])