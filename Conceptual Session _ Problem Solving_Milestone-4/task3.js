/*
Task 3: Develop a way to think about solving problems 
Create a function countVowels  which take a string as input and returns the total number of 
vowels in that string 
If the input is not a string return "Invalid"  
*/
function countVowels(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let count = 0;
  let vowels = "aeiou";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Jhankar miA"));
console.log(countVowels(109));
console.log(countVowels("100"));
console.log(countVowels(["Jhankar miA"]));
console.log(countVowels("Dulal uddin"));
