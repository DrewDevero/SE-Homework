/*Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
    console.log(num1);
    return num1;
    } else {
    console.log(num2);
    return num2;
    }
}

maxOfTwoNumbers(3, 5);

/*Write a function maxOfThree that takes three numbers as arguments and returns the largest of them. */

function maxOfThreeNumbers(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
        return num2;
    } else {
        console.log(num3);
        return num3;
    }
}

maxOfThreeNumbers(4, 8, 6);

/*Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise */
function isCharacterAVowel(character) {
    let isAVowel;
    const vowels = "aeiou";
    for(let i = 0; i < vowels.length; i++) {
        if (character === vowels[i]) {
        isAVowel = true;
        break;
        } else {
        isAVowel = false;
        }
    }
    console.log(isAVowel);
    return isAVowel;
}
isCharacterAVowel("r");
isCharacterAVowel("e");

//Write a function charCount that takes a string and returns the length of the string.

function charCount(string) {
    console.log(string.length);
    return string.length;
}

charCount("everyone");

/*Write a function vowelCount that takes a String and returns the number of vowels in the String. add a check for the string to be of 10 or less characteers */

function vowelCount(string) {
// establish variable for amount of vowels
    let vowelAmount = 0;
// list all vowels as a string to eventually check against
    let vowels = "aeiou";
//if the length of your string is greater than 10 log out the statement
    if(string.length > 10) {
        console.log(`${string} is more than 10 characters! Please submit a smaller string.`);
    } else {
    // loop through all vowels
        for(let i = 0; i < vowels.length; i++) {
    // each time you are on a vowel in vowels loop through your submitted string
            for(let j = 0; j < string.length; j++) {
    // if any letter in the string is equal to the current vowel your on in your loop, increase the amount referenced by vowelAmount by 1
                if(string[j] === vowels[i]) {
                    vowelAmount ++;
                }
            }
        }
    // log your vowelAmount for your string submission
    // return the value (will not show if using node.js)
        console.log(vowelAmount);
        return vowelAmount;
    }
}
// call vowelCount with your string submission
vowelCount("verycool");
vowelCount("helloTherePeople");

/*Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

const sumArray = (array) => {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        product *= array[i];
    }
    console.log(`Sum equals ${sum}.\nProduct equals ${product}`); 
};

sumArray([1,2,3,4]);

// Write a function that returns the number of arguments passed to the function when called.

function numOfArguments(argument1, argument2, argument3) {
    const argumentArray = [argument1, argument2, argument3];
    console.log(argumentArray.length);
}
numOfArguments();

/*Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj". */

function reverseString(string) {
    const readForwardArray = string.split("");
    const readReverseArray = readForwardArray.reverse((first,last) => last - first);
    const stringReverse = readReverseArray.join("");
    console.log(stringReverse);
    return stringReverse;
}
reverseString("jag tester");

//Write a function findLongestWord that takes an array of words and returns the length of the longest one.

findLongestWord = (words) => {
    let arrayOfWordLengths = [];
// engage each word in the array
    for(let i = 0; i < words.length; i++) {
// place each word length in array, arrayOfWordLengths
        arrayOfWordLengths.push(words[i].length);
    }
    console.log(arrayOfWordLengths);
    console.log(Math.max(...arrayOfWordLengths));
}
findLongestWord(["hello", "howAreYou", "friend"]);

//Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.

filterLongWords = (words, i) => {
    let arrayOfWordLengths = [];
// engage each word in the array
    for(let j = 0; j < words.length; j++) {
// place each word longer than lengthCheck in the array, arrayOfWordLengths
        if (words[j].length > i) {
        arrayOfWordLengths.push(words[j]);
        }
    }
    console.log(arrayOfWordLengths);
}
filterLongWords(["hello", "howAreYou", "friend", "someNiceLearningHere"], 7);

//*** I created an object with reverseString method and message method ***
/* class MakeAReverseStringObj {
    constructor(word) {
        this.reverseString = reverseString,
        this.message = console.log(`I repeat, your reverse string is: ${this.reverseString(word)}.`)
    }
}
const string = new MakeAReverseStringObj("Per Scholas");
string.message;
*/

/*Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString(). */

String.prototype.reverseString = function () {
    reverseString(this);
}
"Per Scholas".reverseString();

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
console.log(stringObj);