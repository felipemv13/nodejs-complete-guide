const person = {
  name: "Max",
  age: 29,
  greet() {
    //we cannot use arrow function in this case
    console.log("Hi, I am", this.name);
  }
};

const arrays = ["Strings", 123, {}, true];
const hobbies = ["Sports", "Cooking"];

// for pass trough the array and expose item by item
for (const hobby of hobbies) {
  console.log(hobby);
}

console.log(hobbies);
console.log(hobbies.map(hobby => hobby));
// the 2 examples above generate the same result

// i can pass through the array and generate a new array using 'map'
console.log(hobbies.map(hobby => "Hobby: " + hobby));
