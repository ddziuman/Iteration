'use strict';

const ages = (persons) => {
  const ages = {};
  for (const name in persons) {
    const person = persons[name];
    ages[name] = person.died - person.born;
  }
  return ages;
};
module.exports = { ages };
