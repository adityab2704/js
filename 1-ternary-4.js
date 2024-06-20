//- Take an input & check if the count of the character is even then check 
//if the chracter start with vowel then print Valid vowel otherwise, invalid vowel
//
//- Or print, decline




input.length % 2 === 0
  ? isVowel(input.charAt(0))
    ? console.log("Valid vowel")
    : console.log("Invalid vowel")
  : console.log("Decline");