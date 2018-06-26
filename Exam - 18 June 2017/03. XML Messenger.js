function messengers(message) {
    let pattern = /^<message\s+((([a-z]+)=\"([a-zA-Z0-9.\s]+)\"\s*)+)>([\s\S]+)<\/message>$/gm
    let exec = pattern.exec(message)
    if (exec) {
        let sender = /\bfrom=\"([a-zA-Z0-9.\s]+)\"/g
        let recepient = /\bto=\"([a-zA-Z0-9.\s]+)\"/g
        let nameSender = sender.exec(exec[1])
        let nameRecipient = recepient.exec(exec[1])
        let messages = exec[5].split('\n')
        if (!nameSender || !nameRecipient) {
            console.log('Missing attributes')
        }else {
            let html = '<article>\n'
            html += `  <div>From: <span class="sender">${nameSender[1]}</span></div>\n`
            html += `  <div>To: <span class="recipient">${nameRecipient[1]}</span></div>\n`
            html += '  <div>\n'
            for (let msg of messages) {
                html += `    <p>${msg}</p>\n`
            }
            html += '  </div>\n'
            html += '</article>'
            console.log(html)
        }
    }else {
        console.log('Invalid message format')
    }
}
messengers('<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old\n' +
    'Let\'s go out for a beer</message>')