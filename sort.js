const number = [1,10,7,9,10,4,6,5,3,2,8];

//descending order, (for ascending a-b)
number.sort((a,b) => (b-a));

console.log(number);

const object = [{name: "Sunil", age: 30, gpa: 1.5},
    {name: "Dharshan", age: 20, gpa: 5.5},
    {name: "krishna", age: 10, gpa: 4.5},
    {name: "Rohit", age: 22, gpa: 3.5}]

//ascending order of alphabalet    
object.sort((a,b) => a.name.localeCompare(b.name));

console.log(object);   