function findVowel(str) {
    const vowels = str.match(/[aeiou]/gi);

    return vowels ? vowels : []
}

console.log(findVowel("Hello World"));
console.log(findVowel("JavaScript"));
console.log(findVowel("AeIou"));