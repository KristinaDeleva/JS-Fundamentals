function extracts(arr) {
    let pattern = /www\.[a-zA-Z\d-]+(\.[a-z]+)+/g

    for (let email of arr) {
        let exec
        while (exec = pattern.exec(email)){
            console.log(exec[0])
        }
    }
}
extracts(['Join WebStars now for free, at www.web-stars.com\n' +
'You can also support our partners:\n' +
'Internet - www.internet.com\n' +
'WebSpiders - www.webspiders101.com\n' +
'Sentinel - www.sentinel.-ko '])