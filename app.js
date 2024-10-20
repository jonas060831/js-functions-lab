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

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (bill_amount, tip_percentage) => bill_amount * (tip_percentage / 100)

console.log('Exercise 7 Result:', calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature = (temperature, scale="F") => {

    // i use ternary to make the code short if scale is Celcius then it will execute the code after ? and if its fahrenheit it will execute the code after :
    const celciusToFahrenheit = (temperature * 9 / 5) + 32
    const fahrenheitToCelcius = (temperature - 32) * 5 / 9
    return scale === "C" ? `${celciusToFahrenheit} (Fahrenheit)`  : `${fahrenheitToCelcius} (Celsius)`
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (num1, num2, operation) => {

    //('add', 'subtract', 'multiply', 'divide')
    //additional sanity check .toLowerCase()
    switch (operation.toLowerCase()) {
        case 'subtract':
            return num1 - num2
        case 'multiply':
            return num1 * num2
        case 'divide':
            return num1 / num2
        //default is add just in case somebody mistype the string and the number are adding then we will know
        default:
            return num1 + num2
    }

}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/


const calculateGrade = grade => {

    // 90 and above yields an 'A'
    // 80-89 is a 'B'
    // 70-79 is a 'C'
    // 60-69 is a 'D'
    // anything lower than a 60 is an 'F'
    
    //this code feels like greedy algorithm you guys are so cool
    const generateLetterGrade = GINF => {
        
        let letter_grade;
        
        if (GINF >= 90) letter_grade = "A"
        else if (GINF >= 80 && GINF <= 89) letter_grade = "B"
        else if (GINF >= 70 && GINF <= 79) letter_grade = "C"
        else if (GINF >= 60 && GINF <= 69) letter_grade = "D"
        else letter_grade = "F"

        return letter_grade
    }

    return generateLetterGrade(grade)
}
console.log('Exercise 10 Result:', calculateGrade(85));


/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

const createUsername = (fname, lname) => {

    //i think i will store it to the variable
    const combined_name = `${fname}${lname}` //lol i almost loose my shit there i added space between fname and lname so the .length resulted to 14 and not 13
    //and then use its individual index to get each character using a function only for this purpose
    const get_the_first_3_letter = string => `${string[0]}${string[1]}${string[2]}`

    return `${get_the_first_3_letter(fname)}${get_the_first_3_letter(lname)}${combined_name.length}`
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));


/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

//haha the rest parameters helps me here
const numArgs = (...nums) => nums.length


console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4,5,6));