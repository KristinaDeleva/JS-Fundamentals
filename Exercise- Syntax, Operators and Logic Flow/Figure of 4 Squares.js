function figure(num) {
    if(num == 2) {
        console.log('+'.repeat(3))
    }else {
        console.log('+'+('-'.repeat(num - 2))+'+'
            +('-'.repeat(num - 2))+'+')
        for (let i = 1; i < num/2-1; i++) {
            console.log('|'+(' '.repeat(num - 2))+'|'
                +(' '.repeat(num - 2))+'|')
        }
        console.log('+'+('-'.repeat(num - 2))+'+'
            +('-'.repeat(num - 2))+'+')
        for (let i = 1; i < num/2-1; i++) {
            console.log('|'+(' '.repeat(num - 2))+'|'
                +(' '.repeat(num - 2))+'|')
        }
        console.log('+'+('-'.repeat(num - 2))+'+'
            +('-'.repeat(num - 2))+'+')
    }
}

figure(2)