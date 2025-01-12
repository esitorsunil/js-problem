function findlargestWord(sentence) {

    // Split into words
    const words = sentence.split(" ");
    
   // find the largest word 
    let largestWord = "";

    for (let word of words) {
        if (word.length > largestWord.length) {
            largestWord = word;
        }
    }
    return largestWord;
}

const sentence = "This is a javascript Interview Preparation"

const largestWord = findlargestWord(sentence);

console.log(largestWord); 
