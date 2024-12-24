function findVowels(str) {
    const vowels = str.match(/[aeiou]/gi);

    return vowels ? vowels : []
}

console.log(findVowels("Hello World"));
console.log(findVowels("JavaScript"));
console.log(findVowels("AeIou"));