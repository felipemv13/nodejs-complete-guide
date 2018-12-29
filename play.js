const person = {
  name: "Max",
  age: 29,
  greet() { //we cannot use arrow function in this case
    console.log('Hi, I am', this.name)
  }
};

console.log(person);
person.greet();