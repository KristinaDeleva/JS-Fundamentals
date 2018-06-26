function query(arr) {
    let pattern = /(?:\?)?([^?&]+?)=(.+?)(?:&|$)/g;

    for (let line of arr) {
        let obj = {};
        let exec = pattern.exec(line)
        while (exec) {
            let key = exec[1];
            let value = exec[2];
            key = key.replace(/(\+|%20)+/g, " ").trim();
            value = value.replace(/(\+|%20)+/g, " ").trim();

            if (!obj.hasOwnProperty(key)) {
                obj[key] = [];
            }
            obj[key].push(value)
            exec = pattern.exec(line)
        }
        let result = "";
        for (let key in obj) {
            result += key + "=[" + obj[key].join(", ") + "]";
        }
        console.log(result)
    }
}
query(['field=value1&field=value2&field=value3',
'http://example.com/over/there?name=ferret'])