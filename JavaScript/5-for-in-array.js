'use strict';

const numbers = { test: 123, test2: 1234567 };
numbers.field2 = 'Value2';
numbers[-10] = 'Value3';
numbers.field1 = 'Value1';
numbers[5] = 20;

Object.defineProperty(numbers, 'newField', {
  enumerable: false,
  value: 'valueOfNewField',
});

Object.prototype.inheritedProperty = function() {  };

for (const i in numbers) {
  const value = numbers[i];
  console.log(i, typeof i, value);
}
