'use strict';

const numbers = [7, 10, 1, 5, 2];
numbers.field2 = 'Value2';
numbers[-10] = 'Value3';
numbers.field1 = 'Value1';
numbers[5] = 20;

for (const value of numbers) {
  console.log(value, typeof value);
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr[Symbol.iterator] = function() {
  const step = 2;
  let index = 0;
  return {
    next: () => {
      const result = {
        value: index,
        done: false
      };
      if (index >= this.length) {
        result.done = true;
        return result;
      }
      index += step;
      return result;
    }
  };
};

for (const value of arr) {
  console.log(value);
}

arr.push(10, 12, 13, 14, 15, 16);
for (const value of arr) {
  console.log(value);
}

console.dir({ whatIsIteratorInsideSymbol: Symbol.iterator }); // constant value of Symbol ('well-known')