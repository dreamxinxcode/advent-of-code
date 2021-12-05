const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((num) => parseInt(num, 10));

let answer = 0;
let prev;
let sum;

for (let i = 0; i < input.length; i++) {
    const items = input.slice(i, i + 3);
    if (!items.length) {
        break;
    }
    sum = items.reduce((a, b) => a + b);
    if (prev && sum > prev && i > 0) {
        answer++;
    }
    prev = sum;
}

console.log(answer);