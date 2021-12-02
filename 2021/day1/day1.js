const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((num) => parseInt(num, 10));

let answer = 0;

input.forEach((item, index, array) => {
    if (item > array[index - 1]) {
        answer++;
    }
});

console.log(answer)