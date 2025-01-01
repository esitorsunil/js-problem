function alternateCharacter(input) {
    let chars = input.split("")

    for (let i=0; i<chars.length; i=i+2){
        chars [i] = "*";
    }
    return chars.join("");
}


let inputString = "This is JavaScript";
let alternateString = alternateCharacter(inputString);

console.log(alternateString);