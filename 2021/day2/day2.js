const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8')
    .toString()
    .trim()
    .split('\n');

const sumVals = (type) => {
    return input.filter(item => {
        return item.split(' ')[0] === type;
    })
    .map(item => Number(item.split(' ')[1]))
    .reduce((a , b) => a + b);
};

const ups = sumVals('up');
const downs = sumVals('down');
const forwards = sumVals('forward');

console.log(forwards * (downs - ups));
