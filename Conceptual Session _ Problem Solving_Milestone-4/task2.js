/*
Task 2:  
Create a function sumOfArray which takes an array and returns the sum of that array.  If the 
input is not an array and if any data not a number found in the array ,  it will return ‘Invalid’ 
*/
function sumOfArray(arry) {
  if (!Array.isArray(arry)) {
    return '"Invalid"';
  }
  let sum = 0;
  for (let number of arry) {
    if (typeof number !== "number") {
      return '"Invalid"';
    }
    sum += number;
  }
  return sum;
}
console.log(sumOfArray([1, 2, 3]));
console.log(sumOfArray([3, 7, 8]));
console.log(sumOfArray([1, "das", 3]));
console.log(sumOfArray(10));
