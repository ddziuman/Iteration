'use strict';

const sum = (...args) => {

  let sum = 0, index = 0;
  if (args.length > 0) {
    do {
      sum += args[index];
    } while (++index < args.length)
  }
  return sum;
};

module.exports = { sum };
