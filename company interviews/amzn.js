//Altus
var vowelConsonantsSequence = function (password) {
  const vowels = new Set("aeiou");
  let subStringHasVowel = 0;
  let subStringHasConsonant = 0;
  let amountOfSequence = 0;
  for (let i = 0; i < password.length; i++) {
    const letter = password[i];
    if (subStringHasVowel > 0 && subStringHasConsonant > 0) {
      subStringHasVowel = 0;
      subStringHasConsonant = 0;
      amountOfSequence++;
    }
    if (vowels.has(letter) && subStringHasVowel === 0) {
      subStringHasVowel++;
    } else if (!vowels.has(letter)) {
      subStringHasConsonant++;
    }
  }
  return subStringHasVowel > 0 && subStringHasConsonant > 0
    ? amountOfSequence + 1
    : amountOfSequence;
};

//Kevin
function findPasswordStrength(password) {
  const vowels = new Set("aeiou");
  let result = 0;
  let hasVowel = false;
  let hasconsonant = false;
  for (let i = 0; i < password.length; i++) {
    if (hasVowel && hasconsonant) {
      console.log("hit both", password[i]);
      hasVowel = false;
      hasconsonant = false;
      result++;
    }
    if (vowels.has(password[i])) {
      hasVowel = true;
    } else if (!vowels.has(password[i])) {
      hasconsonant = true;
    }
  }
  return hasVowel && hasconsonant ? result + 1 : result;
}

console.log(vowelConsonantsSequence("hackerrank")); //3
console.log(vowelConsonantsSequence("thisisbeautiful")); //6
console.log(vowelConsonantsSequence("iiiiiieeaaaaaa")); //0
