'use strict';

const sum = (...args) => args.reduce((acum, next) => acum + next, 0);

module.exports = { sum };
