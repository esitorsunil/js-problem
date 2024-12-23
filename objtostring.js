const object = {name: "Sunil", age: 30, job: "developer"};
const objToString = JSON.stringify(object);

console.log(objToString);

const stringToObj = JSON.parse(objToString);

console.log(stringToObj);
