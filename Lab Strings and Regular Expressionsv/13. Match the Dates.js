function matchDates(date) {
    let pattern = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g
    let exec
    let dates = []
    for (let dat of date) {
        while (exec = pattern.exec(dat)){
            dates.push(`${exec[0]} (Day: ${exec[1]}, Month: ${exec[2]}, Year: ${exec[3]})`)
        }
    }
    console.log(dates.join('\n'))
}
matchDates(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.']
)