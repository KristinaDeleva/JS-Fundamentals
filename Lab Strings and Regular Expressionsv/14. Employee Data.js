function employeedDate(employ) {
    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/
    for (let element of employ) {
        let exec = pattern.exec(element)
        if (exec){
            console.log(`Name: ${exec[1]}\n` +
                `Position: ${exec[3]}\n` +
                `Salary: ${exec[2]} `)
        }
    }
}
employeedDate(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']
)