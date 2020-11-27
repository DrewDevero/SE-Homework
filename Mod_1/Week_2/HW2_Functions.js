/* Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
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

/* Write a function maxOfThree that takes three numbers as arguments and returns the largest of them. */

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

/* Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise */
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

/*
Write a function vowelCount that takes a String and returns the number of vowels in the String. add a check for the string to be of 10 or less characteers
*/

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

function numOfArguments(argument1, argument2, argument3) {
    const argumentArray = [argument1, argument2, argument3];
    console.log(argumentArray.length);
}
numOfArguments();

const reverseString = (string) => {
    const readForwardArray = string.split("");
    const readReverseArray = readForwardArray.reverse((first,last) => last - first);
    const stringReverse = readReverseArray.join("");
    console.log(stringReverse);
}
reverseString("hello");

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

filterLongestWord = (words, i) => {
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
filterLongestWord(["hello", "howAreYou", "friend", "someNiceLearningHere"], 7);

class MakeAReverseStringObj {
    constructor() {
        this.reverseString = reverseString;
    }
}
const string = new MakeAReverseStringObj;

string.reverseString("Per Scholas");