function secretDate(arr) {
    let nameRegex = /\*[A-Z][a-zA-Z]*(?= |\t|$)/g
    let phoneRegex = /\+[\d-]{10}(?= |\t|$)/g
    let idRegex = /![a-zA-Z\d]+(?= |\t|$)/g
    let secretRegex = /_[A-Za-z\d]+(?= |\t|$)/g

    for (let line of arr) {
        line = line.replace(nameRegex, w => '|'.repeat(w.length))
        line = line.replace(phoneRegex, w => '|'.repeat(w.length))
        line = line.replace(idRegex, w => '|'.repeat(w.length))
        line = line.replace(secretRegex, w => '|'.repeat(w.length))
        console.log(line)
    }
}
secretDate(['Agent *Ivankov was in the room when it all happened.\n' +
'The person in the room was heavily armed.\n' +
'Agent *Ivankov had to act quick in order.\n' +
'He picked up his phone and called some unknown number. \n' +
'I think it was +555-49-796\n' +
'I can\'t really remember...\n' +
'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21\n' +
'Then after that he disappeared from my sight.\n' +
'As if he vanished in the shadows.\n' +
'A moment, shorter than a second, later, I saw the person flying off the top floor.\n' +
'I really don\'t know what happened there.\n' +
'This is all I saw, that night.\n' +
'I cannot explain it myself...'])