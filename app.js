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

console.log('Exercise 3 Result:', isCharAVowel("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name, domain) => `${name}@${domain}`

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (name, time_of_day) => `Good ${time_of_day}, ${name}!`

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (num1, num2, num3) => {

    let arr = [num1, num2, num3]

    //i created a value that holds a temporary largest number
    let largest = -99999

    //this looks like it have a time complexity of O(n)
    for (let index = 0; index < arr.length; index++) {
        //then on each iteration of the array i replace it if the current value of largest is smaller than the value of the current index

        if (largest < arr[index]) largest = arr[index]
    }
    return largest
    
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));