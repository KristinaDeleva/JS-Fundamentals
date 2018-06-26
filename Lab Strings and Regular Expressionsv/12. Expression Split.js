function expression(str) {
    console.log(str.split(/[(),;.\s]+/).join('\n'))
}
expression('let sum = 4 * 4,b = "wow";')
expression('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}')