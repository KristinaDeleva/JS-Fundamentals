function template(arr) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<quiz>\n'
    for (let i = 0; i < arr.length; i+=2) {
        let question = arr[i]
        let answer = arr[i + 1]
        xml += '    <question>\n'
        xml += `        ${question}\n`
        xml += '    </question>\n'
        xml += '    <answer>\n'
        xml += `        ${answer}\n`
        xml += '    </answer>\n'
    }
    xml += '</quiz>'
    console.log(xml)
}
template(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"])
