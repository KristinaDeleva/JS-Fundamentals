function daggersAndSwords(arr) {
    arr = arr.map(n => Math.floor(Number(n)))
    let html = '<table border="1">\n'
    html += '<thead>\n'
    html += '<tr><th colspan="3">Blades</th></tr>\n'
    html += '<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n'
    html += '</thead>\n'
    html += '<tbody>\n'
    for (let i = 0; i < arr.length; i++) {
        let lenght = arr[i]
        if (lenght <= 10){
            continue
        }
        let type = ''
        if (lenght > 40){
            type = 'sword'
        }else {
            type = 'dagger'
        }

        let aplication = ''
        lenght = lenght % 5

        switch (lenght){
            case 0: aplication = '*rap-poker'; break;
            case 1: aplication = 'blade'; break;
            case 2: aplication = 'quite a blade'; break;
            case 3: aplication = 'pants-scraper'; break;
            case 4: aplication = 'frog-butcher'; break;
        }

        html += `<tr><td>${arr[i]}</td><td>${type}</td><td>${aplication}</td></tr>\n`
    }

    html += '</tbody>\n'
    html += '</table>'

    console.log(html)
}
daggersAndSwords([
    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3'])