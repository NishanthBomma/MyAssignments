// return the length of the last word in the string
let sentence="Hello World"
let words = sentence.split(" ")
let lastWord = words[words.length-1]
console.log(lastWord +" - The length of last word :" +lastWord.length)

// Example
let sentence1 = " fly  me   to    the     moon "
let removeExtraspaces = sentence1.trim()
let splittingSentence = removeExtraspaces.split(" ")
let lastWord1 = splittingSentence[splittingSentence.length-1]
console.log(lastWord1.length)

//Anagram
function isAnagram(words2,words3)
{
let removeSpaces1 = words2.split("").sort()
let removeSpaces2 = words3.split("").sort()
if (removeSpaces1.length==removeSpaces2.length)
{
    for(let i=0;i<removeSpaces1.length;i++)
    {
        if(removeSpaces1[i]==removeSpaces2[i])
        {
            return "is Anagram"
            break
        }
        else{
            return "is Not Anagram"
            break
        }
    }
}
else{
   console.log("Diff lengths") 
}
}
console.log(isAnagram('listen', 'silent'))
console.log(isAnagram('hello','world'))
console.log(isAnagram('listen','world'))