'use strict';

const sum = (...args) => {
  let sum = 0, index = 0;
  while (index < args.length) {
    sum += args[index++];
  }
  return sum;
};

module.exports = { sum };
