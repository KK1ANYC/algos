//recursion

//reverse String
function reverse(string) {
  if (string.length === 0) return "";
  let lastEl = string[string.length - 1];
  let reverseString = reverse(string.slice(0, -1));
  return (lastEl += reverseString);
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'

//palindrome
function palindrome(string) {
  if (string.length === 1) return true;
  if (string.length === 2) return string[0] === string[1];
  let firstEl = string[0];
  let lastEl = string[string.length - 1];
  if (firstEl !== lastEl) {
    return false;
  }
  let isPalindrome = palindrome(string.slice(1, -1));
  return isPalindrome;
}

console.log(palindrome("tacocat")); // true

//isTrue
const isOdd = (val) => val % 2 !== 0;

function someRecursive(nums, callback) {
  if (nums.length === 1 && !callback(nums[nums.length - 1])) return false;
  if (callback(nums[nums.length - 1])) return true;
  return someRecursive(nums.slice(0, -1), callback);
}

console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

//Flatten Array

//example 1
function flatten(nestedArr) {
  let arr = [];
  for (let i = 0; i < nestedArr.length; i++) {
    let el = nestedArr[i];
    if (Array.isArray(el)) {
      arr = arr.concat(flatten(el));
    } else {
      arr.push(el);
    }
  }
  return arr;
}

//example 2
function flatten(array) {
  let arr = [];
  if (array.length == 0) return arr;
  if (Array.isArray(array[0])) {
    arr = arr.concat(flatten(array[0]));
  } else {
    arr.push(array[0]);
  }
  arr = arr.concat(flatten(array.slice(1)));

  return arr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]

//example 3
function capitalizeFirst(arr) {
  let result = [];
  function recursiveHelp(arr) {
    if (arr.length === 0) {
      return;
    }
    if (arr.length >= 1) {
      result.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    }
    return recursiveHelp(arr.slice(1));
  }
  recursiveHelp(arr);
  return result;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

//example 4

var obj1 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

function nestedEvenSum(obj) {
  let sum = 0;
  function recursiveHelp(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        recursiveHelp(obj[key]);
      } else if (obj[key] % 2 === 0) {
        sum += obj[key];
      }
    }
  }
  recursiveHelp(obj);
  return sum;
}

console.log(nestedEvenSum(obj1)); // 10

//example 5
function capitalizeWords(words) {
  let result = [];
  function recursiveHelp(arr) {
    if (arr.length === 0) return;
    if (arr.length >= 1) {
      result.push(arr[0].toUpperCase());
    }
    return recursiveHelp(arr.slice(1));
  }
  recursiveHelp(words);
  return result;
}

let words = ["i", "am", "learning", "recursion"];

console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

//example 6
let obj = {
	num: 1,
	test: [],
	data: {
	    val: 4,
	    info: {
		isRight: true,
		random: 66
	    }
	}
    }

    function stringifyNumbers (obj) {
      for (let key in obj) {
	if (typeof obj[key] === 'object') {
	  stringifyNumbers(obj[key])
	} else if (typeof obj[key] === 'number') {
	  obj[key] = obj[key].toString()
	}
      }
      return obj
    }

    console.log(stringifyNumbers(obj))

    
