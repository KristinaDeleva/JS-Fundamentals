function validation(email) {
    let pattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/
    if (pattern.test(email)) {
        console.log('Valid')
    }else {
        console.log('Invalid')
    }
}
validation('valid@email.bg')
validation('invalid@emai1.bg')