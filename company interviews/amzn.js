
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
  for (let i = 0; i <= password.length; i++) {
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
  return result;
}

console.log(vowelConsonantsSequence("hackerrank")); //3
console.log(vowelConsonantsSequence("thisisbeautiful")); //6
console.log(vowelConsonantsSequence("iiiiiieeaaaaaa")); //0



//https://gist.github.com/siddydutta/0af4498845adf5f875b7575eb2e0ac26

function applicationPairs(deviceCapacity, foregroundAppList, backgroundAppList) {
  foregroundAppList.sort((a,b) => a[1]-b[1])
  backgroundAppList.sort((a,b) => a[1]-b[1])

  let memUsed = -Infinity
  let result = []
  let firstPtr = 0
  let secondPtr = backgroundAppList.length - 1

  while (firstPtr < foregroundAppList.length && secondPtr >= 0) {
    let totalMem = foregroundAppList[firstPtr][1] + backgroundAppList[secondPtr][1]
    if (totalMem > deviceCapacity) {

      secondPtr -= 1
    } else {
      if (memUsed <= totalMem) { //max <= total memory
        if (memUsed < totalMem) { //finding the current max value
          result = []
          memUsed = totalMem
        }
        result.push([foregroundAppList[firstPtr][0], backgroundAppList[secondPtr][0]])
        let bApp = secondPtr

        while (bApp > 0 && backgroundAppList[bApp][1] == backgroundAppList[bApp-1][1]){

          result.push([foregroundAppList[firstPtr][0], backgroundAppList[bApp-1][0]])
          bApp -= 1
        }
      }

      firstPtr += 1
    }
  }
  if  (!result.length) {
    return [[]]
  }
  return result
}


console.log("applicationPairs",applicationPairs(7, [[1,2], [2,4],[3,6]], [[1,2]]) ) //[2,1]

console.log("applicationPairs",applicationPairs(10, [[1,3], [2,5],[3,7], [4,10]], [[1,2], [2,3], [3,4],[4,5]]) ) //[[2,4],[3,2]]
10 , 10
console.log("applicationPairs",applicationPairs(16, [[2,7], [3,14]], [[2,10], [3,14]]) ) //[()]
