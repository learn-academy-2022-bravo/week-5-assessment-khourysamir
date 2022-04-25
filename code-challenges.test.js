// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"


describe("secrets", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
    it("takes in a string and returns a coded message", () => {
      expect(secrets(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(secrets(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(secrets(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// Output:
// FAIL  ./code-challenges.test.js
// secrets
//   ✕ takes in a string and returns a coded message
// ● secrets › takes in a string and returns a coded message
//   ReferenceError: secrets is not defined


// b) Create the function that makes the test pass.

// PSUEDOCODE:
// create a function named secrets
// made a new variable named letters
// create a nested function named jumble
// use method hasOwnProperty and if comes it comes back true, replace letter with number

const secrets = (message) => {
    const letters = {'a': 4, 'e': 3, 'i': 1, 'o': 0, 'A': 4, 'E': 3, 'I': 1, 'O': 0}
    const jumble = (words) => {
        return letters.hasOwnProperty(words)?
    letters[words]:words
    }
        return message.split('').map(jumble).join('')
}
// OUTPUT:
// PASS  ./code-challenges.test.js
// secrets
//   ✓ takes in a string and returns a coded message (1 ms)

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// const letterA = "a"
// // Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

describe("tootyFruity", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
    expect(tootyFruity(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(tootyFruity(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
})
})
// Output:
// FAIL  ./code-challenges.test.js
// tootyFruity
//   ✕ takes in an array of words and a single letter and returns all the words that contain that particular letter. (1 ms)
// ● tootyFruity › takes in an array of words and a single letter and returns all the words that contain that particular letter.
//   ReferenceError: tootyFruity is not defined

// b) Create the function that makes the test pass.
// PSEUDOCODE:
// create a function named tootyFruity
//insert a parameter of array and letter
// Filter through the array and see if each value has a letter that we need
// Return each new value in the new array

const tootyFruity = (array, letter) => {
    return array.filter(value => value.toLowerCase().includes(letter))
}

// Output:
// PASS  ./code-challenges.test.js
// tootyFruity
//   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter. (1 ms)
// console.log(tootyFruity(arrayOfWords2, letterE))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
    it("takes in an array of 5 numbers and determines whether or not the array is a fullhouse", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})
//Output:
// FAIL  ./code-challenges.test.js
// bigWinna
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a “full house” (1 ms)
// ● bigWinna › takes in an array of 5 numbers and determines whether or not the array is a “full house”
//   ReferenceError: bigWinna is not defined


// b) Create the function that makes the test pass.
// PSEUDOCODE:
// create a function named fullHouse
// create a variable holding an empty object
// for loop through the array and determine how many times a number is repeated in the array and determine if it is indeed a fullhouse.

const fullHouse = (arr) => {
    let countCard = {}
    for(let x of arr){ 
        countCard[x] = (countCard[x] || 0) + 1;
    }
    let vals = Object.values(countCard);
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true;
    }
    return false;
  }
// console.log(fullHouse(hand1));
console.log(fullHouse(hand2));
// console.log(fullHouse(hand3));

// Output:
// PASS  ./code-challenges.test.js
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a fullhouse (1 ms)