'use strict';

const flag = false;

label1: { // labels are evil? 
  console.log(1);
  label2: {
    console.log(2);
    break label1;
    console.log(3);
  }
  console.log(4);
}
console.log(5);


// MAIN USE-CASE for labels: breaking or continuing outer loop from the inner loop:
outer:
for (let i = 0; i < 10; i++) {
  inner:
  for (let j = 0; j < 10; j++) {
    console.log(j);
    break outer;
  }
} // here will be one single console output: '0';


