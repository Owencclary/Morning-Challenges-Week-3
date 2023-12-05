// Write your code below
function IsPalindrome(word) 
{
    let wordReversed = ""
    // Loop that runs backwards through the given word
    for (let i = word.length - 1; i >= 0; i--) 
    {
        wordReversed += word[i]
    }
    if (word === wordReversed) 
    {
        return true
    } 
    else 
    {
        return false
    }
}
console.log(IsPalindrome("noon"))
console.log(IsPalindrome("hello"))
console.log(IsPalindrome("Racecar"))
console.log(IsPalindrome("racecar"))