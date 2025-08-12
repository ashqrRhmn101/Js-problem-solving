function matchFinder(string1, string2) {
    // const matchFinder = string1.length;/
    if(string1.includes(string2)){
        return true;
    }
    else{
        return false;
    }
}
console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("Peter Parker", "pet"));