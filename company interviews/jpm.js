// first question was return 1 if the index is the same as it's frequency and 0 if none of numbers are

function indexFreq(numStr) {
  const hash = {};
  let result = "0";
  for (let num of numStr) {
    if (!hash[num]) hash[num] = 1;
    else hash[num]++;
  }

  for (let k = 0; k < numStr.length; k++) {
    if (hash[k] == numStr[k]) {
      result = "1";
      break;
    }
  }
  console.log(result);
}

console.log("1", indexFreq("2020"));
console.log("1", indexFreq("0123"));
console.log("0", indexFreq("4325"));

//numStr = lines[i]
//system.stdout.lines("1")

/*
Explanation:
I create a hash table to keep track of the letters in the string.
I create a result variable and default it to a string of 0.
Then I loop through the string and check if the hash table has the letters and increment it if it does otherwise set it to 1.
Then I loop throught the string again to check if the hash table has the same value as the index of the string.
and if it does then set the result to 1.
*/


// second question is take a jumbled letters and decipher in the numbers in the jumbled letters
// input: "ofthneeourfe"
// output: "143"
//quicksort


//https://leetcode.com/problems/reconstruct-original-digits-from-english/

//Solution 1 - CHOSEN ONE
var originalDigits = function (s) {
  let result = new Array();
  let map = new Map();

  for (let char of s) {
    if (!map.has(char)) map.set(char, 0);
    map.set(char, map.get(char) + 1);
  }
  //loop over the parameter and set the map to the frequency of the char

  const pushCharNum = (char, numStr, digit) => {
    if (map.has(char)) {
      //check if the map has the char
      let numOfChar = map.get(char);
      //set a variable to equal the result of the number of char
      for (let letter of numStr) {
        //run a for loop on the numStr
        map.set(letter, map.get(letter) - numOfChar);
        //setting the letter with the new value minus the old
        if (map.get(letter) == 0) map.delete(letter);
        //if the value of the letter is 0 just delete it
      }
      while (numOfChar > 0) {
        result.push(digit);
        numOfChar--;
        //while the value of the unique char is more than 0, push the digit in and decrement one
      }
    }
  };

  //unique nums
  pushCharNum("z", "zero", 0);
  pushCharNum("w", "two", 2);
  pushCharNum("u", "four", 4);
  pushCharNum("x", "six", 6);
  pushCharNum("g", "eight", 8);
  //non-unique nums
  pushCharNum("o", "one", 1);
  pushCharNum("h", "three", 3);
  pushCharNum("f", "five", 5);
  pushCharNum("v", "seven", 7);
  pushCharNum("i", "nine", 9);

  result = quickSort(result).join("");
  return result;
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};

/*
Explanation:
I created a result variable and default it to an empty array.
I created a map variable and default it to an empty map.
Then I loop through the string and set the map to the frequency of the character.
Then I create a function that takes in the character, digit in word, and digit.
The function will check if the map has the character and if it does then it will decrement the map by the number of the character inside the for loop
If the map with the letter from the numStr is 0 then it will delete the letter from the map.
Then it will push the digit in the result array and decrement the number of the unique character by 1.
I then invoke the pushCharNum function and pass in the unique character, digit in word, and digit.
It is important that unique characters for the number are invoked first.
then I invoke the quickSort function and pass in the result array and turn it into a string.
I utilize quicksort because it is one of the most efficient sorting algorithms.
*/


//Solution 2 - works
var originalDigits = function (s) {
  var freq = {},
    i,
    l,
    numbersFoundCounted = [], // we keep track of the numbers found here, and later transform it in the output
    out = [];

  var pass1 = {
    z: ["zero", 0],
    w: ["two", 2],
    u: ["four", 4],
    x: ["six", 6],
    g: ["eight", 8],
  };

  var pass2 = {
    o: ["one", 1],
    t: ["three", 3],
    f: ["five", 5],
    s: ["seven", 7],
  };

  var pass3 = {
    i: ["nine", 9],
  };

  // make a frequency count of each letter in s
  for (i = 0, l = s.length; i < l; i++) {
    if (!freq[s[i]]) {
      freq[s[i]] = 1;
    } else {
      freq[s[i]]++;
    }
  }

  // console.log('freq', freq);

  var reduce = function (pass) {
    // for each unique letter ...
    for (let entry in pass) {
      // ... find out how many there are ...
      let count = freq[entry];

      if (count) {
        // ... and reduce the freq map for all the letters in the full number with that count
        for (let letter of pass[entry][0]) {
          freq[letter] -= count;
        }

        // and we register how many there were for the final answer later
        numbersFoundCounted[pass[entry][1]] = count;
      }
    }
  };

  // Do the passes in order, so we always pick out numbers uniquely
  reduce(pass1);
  reduce(pass2);
  reduce(pass3);

  // console.log('freq', freq); // this should be all zeroes now
  // console.log('numbersFoundCounted', numbersFoundCounted) // hold something like [1,1,0,3]

  // Generate the output string the answer understands
  for (i = 0, l = numbersFoundCounted.length; i < l; i++) {
    let j, m;

    for (j = 0, m = numbersFoundCounted[i]; j < m; j++) {
      out.push(String(i));
    }
  }

  return out.join("");
};


//Solution 3 - doesn't work
const jumbledLetters = (jumble) => {
  const hash = {};
  for (let letter of jumble) {
    if (hash[letter]) hash[letter]++;
    else hash[letter] = 1;
  }

  let result = [];
  while (true) {
    let len = result.length;
    if (hash.z && hash.e && hash.r && hash.o) {
      hash.z--;
      hash.e--;
      hash.r--;
      hash.o--;
      result.push(0);
    }
    if (hash.o && hash.n && hash.e) {
      hash.o--;
      hash.n--;
      hash.e--;
      result.push(1);
    }
    if (hash.t && hash.w && hash.o) {
      hash.t--;
      hash.w--;
      hash.o--;
      result.push(2);
    }
    if (hash.t && hash.h && hash.r && hash.e > 1) {
      hash.t--;
      hash.h--;
      hash.r--;
      hash.e -= 2;
      result.push(3);
    }
    if (hash.f && hash.o && hash.u && hash.r) {
      hash.f--;
      hash.o--;
      hash.u--;
      hash.r--;
      result.push(4);
    }
    if (hash.f && hash.i && hash.v && hash.e) {
      hash.f--;
      hash.i--;
      hash.v--;
      hash.e--;
      result.push(5);
    }
    if (hash.s && hash.i && hash.x) {
      hash.s--;
      hash.i--;
      hash.x--;
      result.push(6);
    }
    if (hash.s && hash.e > 1 && hash.v && hash.n) {
      hash.s--;
      hash.e -= 2;
      hash.v--;
      hash.n--;
      result.push(7);
    }
    if (hash.e && hash.i && hash.g && hash.h && hash.t) {
      hash.e--;
      hash.i--;
      hash.g--;
      hash.h--;
      hash.t--;
      result.push(8);
    }
    if (hash.n > 1 && hash.i && hash.e) {
      hash.n -= 2;
      hash.i--;
      hash.e--;
      result.push(9);
    }

    if (result.length === len) break;
  }
  result = quickSort(result).join("");
  console.log(result);
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

console.log(jumbledLetters("ofthnereourfe")); // "134"
console.log(jumbledLetters("fnineenoour")); //"149"
console.log(jumbledLetters("nfnineennoourie")); //"1499"
