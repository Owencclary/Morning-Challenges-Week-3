function hasMoreVowelss(word) {
    let vowelArray = ['a','e','i','o','u','A','E','I','O','U']
    let totalVowels = 0;
    let totaleNonVowels = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowelArray.includes(word[i])) {
            totalVowels++;
        }
        else {
            totaleNonVowels++;
        }
    }
    if (totalVowels > totaleNonVowels) {
        return true;
    } else {
        return false;
    }
}

console.log(hasMoreVowelss("moose"))
console.log(hasMoreVowelss("mice"))
console.log(hasMoreVowelss("graph"))
console.log(hasMoreVowelss("yay"))
console.log(hasMoreVowelss("Aal"))