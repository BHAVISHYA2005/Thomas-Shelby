// Prompt the user for their age
let userAge = prompt("Please enter your age:");

// Check the user's age and display an appropriate message
if (userAge <= 0) {
  console.log("Invalid age entered.");
} else if (userAge >= 1 && userAge <= 12) {
  console.log("You are a child.");
} else if (userAge >= 13 && userAge <= 19) {
  console.log("You are a teenager.");
} else if (userAge >= 20 && userAge <= 64) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior.");
}
const name = 'Kunal & wojak'

const namr1= 'Bhavishya'