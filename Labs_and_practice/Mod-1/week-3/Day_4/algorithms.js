// My HW submission is an example of a hash map 

// My HW week2 hw2 functions bonus submission is an example of a hash map

/*Write a function that takes a string as argument and returns an object where:
the keys are the characters that occur in the string
the values are the number of occurrences for each letter, regardless of the case */

let StringObj = {};
function stringKeyAndVal(string) {
    let strArr = [];
    for(let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            strArr.push(string[i]);
        }
    }
    let str = strArr.join("").toLowerCase();
    class makesAString {
        constructor() { 
            for(let i = 0; i < str.length; i++) {
                this[str[i]] = 0;
                for(let j = 0; j < str.length; j++) {
                    if(str[i] === str[j]) {
                        this[str[i]] += 1;
                    }
                }
            }
        }
    }
    stringObj = new makesAString;
    return stringObj;
}
console.log(stringKeyAndVal("Per Scholas"));
const perScholasObj = stringObj
console.log(perScholasObj);
console.log(stringKeyAndVal("Stuff"));
const stuffObj = stringObj;
console.log(stuffObj);
console.log(perScholasObj); //object retains original/desired assignment
console.log(perScholasObj.c); // shows object value at desired key
console.log(stuffObj.u);
console.log(Object.keys(perScholasObj)); // shows object keys
console.log(Object.keys(stuffObj));