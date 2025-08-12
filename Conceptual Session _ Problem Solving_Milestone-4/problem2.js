/*function signature/sample
function  validContact( contact ) { 
          // You have to write your code here 
}
          ||!/^\d+$/.test(contact);
*/
function validContact(contact) {
  if (typeof contact !== "string") {
    return '"Invalid"';
  } else if (
    contact.includes(" ") ||
    contact.length !== 11 ||
    !contact.startsWith("01")
  ) {
    return false;
  } else {
    return true;
  }
}
console.log(validContact("01819234567"));
console.log(validContact("0181923 4567"));
console.log(validContact("01819238654567"));
console.log(validContact(["01987654321"]));
console.log(validContact("02819238654"));
console.log(validContact(true));
