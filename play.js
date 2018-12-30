const person = {
  name: "Max",
  age: 29,
  greet() {
    //we cannot use arrow function in this case
    console.log("Hi, I am", this.name);
  }
};

const printName = personData => console.log(personData.name);
printName(person);

// to retrieve information from an object, we can use a feature called 'destructuring'
const printName1 = ({ name }) => console.log(name);
printName1(person);
// it possible to retrieve more than 1 information
const printName2 = ({ name, age }) => console.log(name, age);
printName2(person);

// differente way
const { name, age } = person;
console.log(name, age);

// we can use destructuring in arrays too
const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1);
console.log(hobby2);

// // const arrays = ["Strings", 123, {}, true];
// const hobbies = ["Sports", "Cooking"];

// // // for pass trough the array and expose item by item
// // for (const hobby of hobbies) {
// //   console.log(hobby);
// // }

// // console.log(hobbies);
// // console.log(hobbies.map(hobby => hobby));
// // // the 2 examples above generate the same result

// // // i can pass through the array and generate a new array using 'map'
// // console.log(hobbies.map(hobby => "Hobby: " + hobby));

// // // 'map' doesn't change the array, because it works with a reference of this array
// // // if I want to change the array, I can use, for example, 'push' method.
// // hobbies.push('Programming');
// // console.log(hobbies);

// //#region SPREAD operator
// // first way to create a replic of an array
// const copiedArray = hobbies.slice();
// console.log(hobbies); // the original
// console.log(copiedArray);

// // second way to create a copy of an array is using spread operator '...'
// // this is three points can be used with arrays or objects. It pull out the elements of arrays or objects and put inside the
// const arrayUsingSpread = [...hobbies];
// console.log(arrayUsingSpread);
// // I can use with objects... let's duplicate the object 'person' above
// const objectUsingSpread = {...person};
// console.log(person); // the original
// console.log(objectUsingSpread); // the copy
// //#endregion

// //#region REST operator
// // We can transform data in an array like below
// // but we are limited to declare the quantity of items to transform
// const toArray = (args1,args2, args3) => {
//   return [args1,args2, args3];
// };
// console.log(toArray(1,2,3));

// // we can do the same process using rest operator '...'
// // the same three points of spread operator, but in functions, it works different
// // they give alternative to transform the arguments to an array
// const toArrayUsingRest = (...args) => args; // i also can write "(...args) => { return args }"
// console.log(toArrayUsingRest(1,2,3));
// // I can use how much arguments I need
// console.log(toArrayUsingRest(1,2,3,4,5,6));
