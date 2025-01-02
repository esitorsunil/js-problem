


const strings = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Pineapple", "Grape", "Watermelon"];
const longest = strings.reduce((a, b) => (a.length > b.length ? a : b));

console.log(longest);