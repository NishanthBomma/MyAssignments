function palindrome(word)
{
let splitWord=word.split("")
let reverseString=""
for(let i=word.length-1;i>=0;i--)
{
    reverseString=reverseString+splitWord[i]
}
if(word==reverseString)
    {
return "is Palindrome"
    }
    else
{
    return "not Palindrome"
}
}
console.log(palindrome('listen'))
console.log(palindrome('madam'))