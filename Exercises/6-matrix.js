'use strict';

const max = (matrix) => {
  let max = Number.MIN_VALUE;
  for (const row of matrix) {
    for (const value of row) {
      if (value > max) max = value;
    }
  }
  return max;
};
console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
module.exports = { max };
