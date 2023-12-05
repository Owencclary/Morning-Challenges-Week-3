function decoder(code) {
    let skipNum = parseInt(code[0])
    let counter = 0;
    let outputString = "";

    for (let i = 1; i < code.length; i++) {
        if (counter === skipNum) {
            skipNum = parseInt(code[i + 1]) + 1;
            outputString += code[i];
            counter = 0;
        } else {
            counter++;
        }
    }
    return outputString;
}

console.log(decoder('0h2xce5ngbrdy'));
console.log(decoder('3vdfn'));
console.log(decoder('0r'));
console.log(decoder('2bna0p1mp2osl0e'));
console.log(decoder('0y4akjfe0s'));