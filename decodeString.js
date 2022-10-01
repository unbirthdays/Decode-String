// Write your code below this line
/* In this challenge, you’ll write a decoder.

Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

The number in the string represents how many characters each letter should shift.
*/

function decodeString(seq) {
    let changedWord = "";
    let initNum = Number(seq[0]);
    for (let i = 1; i < seq.length; i++) {
        let changedLetter = seq[i].charCodeAt() + initNum;
        changedWord += String.fromCharCode(changedLetter);
    }
    return changedWord;
}


console.log(decodeString("1a"));
console.log(decodeString("3ce"));
console.log(decodeString("2fcjjm"));