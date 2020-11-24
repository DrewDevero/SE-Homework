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
    let vowelAmount = 0;
    let vowels = "aeiou";
    for(let i = 0; i < vowels.length; i++) {
        for(let j = 0; j < string.length; j++) {
            if(string[j] === vowels[i]) {
                vowelAmount ++;
            }
        }
    }
    if(string.length > 10) {
        console.log(`${string} is more than 10 characters!`);
    }
    console.log(vowelAmount);
    return vowelAmount;
}
vowelCount("helloTherePeople");