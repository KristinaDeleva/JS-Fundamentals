function captures(arr) {
    let result = []
    let pattern = /\d+/g
    for (let num of arr) {
        let exec = pattern.exec(num)
        while (exec){
            result.push(exec[0])
            exec = pattern.exec(num)
        }
    }
    console.log(result.join(' '))
}
captures([
    'The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
])