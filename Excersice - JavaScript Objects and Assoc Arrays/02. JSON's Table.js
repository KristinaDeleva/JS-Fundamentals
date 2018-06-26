function jsonTable(arr) {
    let result = '<table>\n'
    for (let obj of arr) {
        let html = JSON.parse(obj)
        result += '   <tr>\n'
        result += `       <td>${htmlEscape(html.name)}</td>\n`
        result += `       <td>${htmlEscape(html.position)}</td>\n`
        result += `       <td>${html.salary}</td>\n`
        result += '   <tr>\n'
    }
    result += '</table>'

    console.log(result)


    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
jsonTable([{"name":"Pesho","position":"Promenliva","salary":100000},
{"name":"Teo","position":"Lecturer","salary":1000},
{"name":"Georgi","position":"Lecturer","salary":1000}])