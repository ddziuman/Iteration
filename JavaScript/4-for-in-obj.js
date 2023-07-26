'use strict';

const hash = {
  first: 7,
  second: 10,
  third: 1,
  fourth: 5,
};

hash.fifth = 2; // property mixin using assignment? (примесь свойства)

Object.defineProperty(hash, 'newField', { // property mixin using 'Object.defineProperty' method
  enumerable: false,
  value: 'valueOfNewField',
});

Object.prototype.inheritedProperty = 'inherited'; // Adding new propertyo to Object prototype

const d = {};
console.log(d.inheritedProperty);

for (const key in hash) {
  const value = hash[key];
  console.log(
    key, '\t', typeof key, '\t',
    value, '\t', typeof value
  );
}

const a = {a: 2, b: 1};
console.log(a);
// console.log(Object.prototype);