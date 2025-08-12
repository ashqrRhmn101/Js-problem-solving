/*function signature/sample 
function  validProposal( person1 , person2 ) { 
          // You have to write your code here 
} 
*/
function validContact(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return '"Invalid"';
  }
  const maleAge = person1.age;
  const femaleAge = person2.age;

  const maleGender = person1.gender;
  const femaleGender = person2.gender;

  const ages = Math.abs(maleAge - femaleAge);
// return ageDiff <= 7 && person1.gender !== person2.gender; (one line);
  if (ages <= 7 && maleGender !== femaleGender) {
    return true;
  } else {
    return false;
  }
}

const matrimonyFined = validContact(
  //   { name: "Rahul", gender: "male", age: 28 },
  //   { name: "Joya", gender: "female", age: 21 }
  //   { name: "shuvo", gender: "male", age: 20 },
  //   { name: "joy", gender: "male", age: 25 }
  // "Mizan", { name: "mitu", gender: "male", age: 32 }
  "Mizan",
  { name: "mitu", gender: "male", age: 32 }
);
console.log(matrimonyFined);
