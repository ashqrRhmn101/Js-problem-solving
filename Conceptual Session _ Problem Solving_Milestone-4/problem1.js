/* function signature/sample
function cashOut( money ) { 
          // You have to write your code here 
}
           2000× 1.75 / 100 = 35 Taka 
*/
function cashOut(money) {
  if (money < 0 || typeof money !== "number") {
    return '"Invalid"';
  } else {
    return money * (1.75 / 100);
  }
}
console.log(cashOut(2000));
console.log(cashOut(100).toFixed(2));
console.log(cashOut(999));
console.log(cashOut(-999));
console.log(cashOut(0));
console.log(cashOut("101"));
console.log(cashOut("memu"));
