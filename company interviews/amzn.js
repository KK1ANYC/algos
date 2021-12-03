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

console.log(vowelConsonantsSequence("hackerrank")); //3
console.log(vowelConsonantsSequence("thisisbeautiful")); //6
console.log(vowelConsonantsSequence("iiiiiieeaaaaaa")); //0
