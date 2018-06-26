function occurences(targetWord, text) {
    let counter = 0
    let index = text.indexOf(targetWord)
    while (index > - 1) {
        counter++
        index = text.indexOf(targetWord, index + 1)
    }
    console.log(counter)
}
occurences('the', 'The quick brown fox jumps over the lay dog.')
occurences('ma', 'Marine mammal training is the training and caring' +
    ' for marine life such as, dolphins, killer whales, sea lions, ' +
    'walruses, and other marine mammals. It is also a duty of the ' +
    'trainer to do mental and physical exercises to keep the animal ' +
    'healthy and happy.')