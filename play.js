// Instead of using double or single quotation marks:
// 'A String' or "Another string" or `Another way of writing strings`

//Now why would we use that way of creating strings?
//With that syntax, you can dynamically add data into a string like this:

const name = "Max";
const age = 29;
console.log(`My name is ${name} and I am ${age} years old.`);
//This is of course shorter and easier to read than the "old" way of concatenating strings:
console.log("My name is " + name + " and I am " + age + " years old.");