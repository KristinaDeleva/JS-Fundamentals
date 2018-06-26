function pyramid(base, increment) {
    let width = base
    let height = base
    let oneBlock = 1

    let stone = 0
    let marble = 0
    let lapis = 0
    let gold = 0
    let count = 0

    while (true) {
        count++;
        if (width - 2 <= 0) {
            gold = (width * height) * increment;
            break;
        }

        let currentRow = width * height;
        let currentStones = (width - oneBlock * 2) * (height - oneBlock * 2);
        stone += currentStones * increment;

        let currentMarble = currentRow - currentStones;

        if (count % 5 !== 0) {
            marble += currentMarble * increment;
        } else {
            lapis += currentMarble * increment
        }

        width -= 2;
        height -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(count * increment)}`)
}
pyramid(11, 1)