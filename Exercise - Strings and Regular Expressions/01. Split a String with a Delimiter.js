function splitted(str, delimiter) {
    str = str.split(delimiter)
    for (let i = 0; i < str.length; i++) {
        console.log(str[i])
    }
}
splitted('One-Two-Three-Four-Five', '-')
splitted('http://platform.softuni.bg', '.')