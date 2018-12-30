setTimeout(() => {
  console.log("Timer is done 1!");
}, 3000);

console.log("Hello!");
console.log("Hi");

// we have a problem when we work with more than 2 callback nested
// look the example below
const fetchData = callback => {
  setTimeout(() => {
    callback("Done");
  }, 1500);
};

setTimeout(() => {
  console.log("Timer is done 2!");
  fetchData(text => {
    console.log(text);
  });
}, 2000);

// other way to do this is using 'promise'
// we have 2 parameters 'resolve' and 'reject'
const fetchData2 = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done 2");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done 3!");
  fetchData2()
    .then(text => {
      console.log(text + ' - first then');
      return fetchData2();
    })
    .then(text2 => {
      console.log(text2 + ' - 2nd then');
    });
}, 2000);
