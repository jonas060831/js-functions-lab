/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

//ANSWER ON EXCERISE 2 */
const isAdult = (age) => age >= 18 ? 'Adult' : 'Minor'

console.log('Exercise 2 Result:', isAdult(18));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (char) => {

    const condition = char === "a" || char === "A" ||
                      char === "e" || char === "E" ||
                      char === "i" || char === "I" ||
                      char === "o" || char === "O" ||
                      char === "u" || char === "U"

    if(condition) return true

    return false
}

console.log('Exercise 3 Result:', isCharAVowel("E"));