const name = 'Max';
let age = 29;
let hasHobbies = true;

age = 30;
name = 'Felipe'; // error: Assignment to constant variable.

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));