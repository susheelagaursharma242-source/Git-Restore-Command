// sample script.js file

function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

function calculateSum(a, b) {
  return a + b;
}

const userName = "Developer";
console.log(greetUser(userName));

const result = calculateSum(10, 20);
console.log(`The sum is: ${result}`);

// Example array usage
const fruits = ["Apple", "Banana", "Mango"];
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});

// Example object
const person = {
  name: "John Doe",
  age: 28,
  profession: "Web Developer"
};

console.log("Person Details:", person);
