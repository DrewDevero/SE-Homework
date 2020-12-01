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

// bubble short

const arr = [8, 5, 2, 9, 5, 6, 3];

function bubbelSort(array) {
    let i = 0;
    let sorted = false;
    while(i < array.length) {
        const CURRENT = array[i];
        const NEXT = array[i + 1];
        i++
    }
}

const fakeArray = [1, 2];
function swap(current, next, array) {
    const TEMPORARY = array[next];
    array[next] = array[current];
    array[current] = TEMPORARY;
    return array;
}

 
console.log(swap(0, 1, fakeArray)); // input [1,2] -> output [2,1]

bubbelSort(arr);

// Angel's bubble sort

function bubbleSort(array) {
	let sorted = false;
	while(!sorted) {
		sorted = true;
		for(let i = 0; i < array.length; i++) {
			if(array[i] > array[i + 1]) {
				const forward = array[i + 1];
				array[i + 1] = array[i];
				array[i] = forward;
				sorted = false;
			}
		}
	}
	return array;
}

// Angel's hash mapping

// Write a function that takes a
  // string as argument 
  // and returns an object where:
const name = "angel juarez";
// A -> ascii value of a
// 
const hashMap = {};
for(let i = 0; i < name.length; i++) {
  // hashMap[ name[i] ] = true;
  const individualCharacterAscii = name[i].charCodeAt(0);
  const ifExists = hashMap[individualCharacterAscii]
  // we want to check if it exists ^^
  if(!ifExists /* if it doesn't exist */) {
    // create the property and attach num 1
    hashMap[individualCharacterAscii] = 1;
  } else {
    // if it does exist
    // what do?
      // hashMap['a'] += 1;
    hashMap[individualCharacterAscii] += 1;
  }
}
console.log(hashMap);