'use strict';

console.log('Example 1');

for (let i = 0; i < 3; i++) { // цикл со счётчиком (for loop)
  console.log(i);
}

console.log('Example 2');

{
  let i = 0;
  for (; i < 3; i++) { // цикл со счётчиком, обьявленным извне
    console.log(i);
  }
}

console.log('Example 3');

{
  for (let i = 0; i < 3;) { // цикл со счётчиком, изменяемым в теле цикла
    console.log(i++);
  }
}
