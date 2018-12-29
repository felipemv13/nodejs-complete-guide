const name = "Max";
let age = 29;
let hasHobbies = true;

age = 30;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
}

// 2 another way to write this function above
// this is an anonymous function
const summarizeUser1 = function(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

// arrow function
const summarizeUser2 = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

// when we have just 1 statement, we can ommit the reserved word 'return' and the curly braces
const add = (a, b) => a + b;

// when we have just 1 argument, we can ommit the parenthesis
const addOne = a => a + 1;

// whe we don't have arguments, we must declare the parenthesis, but them are empty
const addRandom = () => 1 + 0;

console.log(summarizeUser(name, age, hasHobbies));
console.log(summarizeUser1(name, age, hasHobbies));
console.log(summarizeUser2(name, age, hasHobbies));
console.log(add(1, 2), 'add');
console.log(addOne(1), 'addOne');
console.log(addRandom(), 'addRandom');
