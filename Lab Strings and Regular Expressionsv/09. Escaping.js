function escaping(arr) {
    let result = '<ul>\n'
    for (let text of arr) {
        result += `  <li>${htmlEscaping(text)}</li>\n`
    }
    result += '</ul>'
    function htmlEscaping(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    console.log(result)
}
escaping(['<b>unescaped text</b>', 'normal text'])