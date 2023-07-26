'use strict';

let test_value = 3;
console.log(test_value++ === 4); // false?

const range = {
  start: 1,
  end: 10,
  [Symbol.iterator]() {
    let value = this.start;
    return {
      next: () => {
        console.log('log value before next return: ' + value);
        return {
          value,
          done: value++ === this.end + 1
        }
      }
    };
  }
};

console.dir({
  range,
  names: Object.getOwnPropertyNames(range),
  symbols: Object.getOwnPropertySymbols(range),
});

for (const number of range) {
  console.log(number);
}

const sum = (prev, cur) => prev + cur;
const sumIterable = (...iterable) => iterable.reduce(sum);

const sumRange = sumIterable(...range);
console.log('sumRange:', sumRange);
