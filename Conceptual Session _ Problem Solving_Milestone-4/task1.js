/*
Task 1 :  
Create a Function sum  which take 2 value and return the sum of 2 number  
Create a Function multiply which take 2 value and return the sum of 2 number 
Suppose you have 2 numbers a , b  print the sum of  ( a + b)  and ( a x b ) using sum and 
multiply function.
//  (3+2)+(3*2) = 11
*/

function sum(a, b) {
//   sum = (a + b) + (a * b);
  // console.log(sum);
  return a + b + a * b;
}

console.log(sum(3, 2));
console.log(sum(4, 5));
console.log(sum(5, 5));
