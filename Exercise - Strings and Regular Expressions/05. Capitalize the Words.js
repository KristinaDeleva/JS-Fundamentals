function capitalize(words) {
    console.log(words.toLowerCase().split(' ')
        .map(w => w[0].toUpperCase() + w.substr(1)).join(' '))
}
capitalize('Was that Easy? tRY thIs onE for SiZe!')
capitalize('Capitalize these words')