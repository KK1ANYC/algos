function makingAnagrams(a, b) {
  //find num of same char in both
  const larger = a.length >= b.length ? a : b;
  const smaller = a.length < b.length ? a : b;
  //store char count for larger string;
  const storage = {};

  for (const letter of larger) {
    storage[letter] = (storage[letter] || 0) + 1;
  }
  //initialize counter for similar char
  let counter = 0;
  //loop through second/smaller string to find count of similar char
  for (const letter of smaller) {
    if (storage[letter] && storage[letter] > 0) {
      storage[letter]--;
      counter++;
    }
  }

  //MATH
  //abcdefg
  //abczy
  //(5 - 3) + (7 - 5) = 2 + 2 = 4

  const diff_of_smaller = smaller.length - counter;
  const diff_of_larger = larger.length - smaller.length;
  return 2 * diff_of_smaller + diff_of_larger;
}

function makingAnagrams(a, b) {
  const larger = a.length >= b.length ? a : b;
  const smaller = a.length < b.length ? a : b;
  const memo = {};

  for (const letter of larger) {
    memo[letter] = (memo[letter] || 0) + 1;
  }
  let counter = 0;
  for (const letter of smaller) {
    if (memo[letter] && memo[letter] > 0) {
      memo[letter]--;
      counter++;
    }
  }
  const smallerDiff = smaller.length - counter;
  const largerDiff = larger.length - smaller.length;
  return 2 * smallerDiff + largerDiff;
}



console.log(
  "19",
  makingAnagrams(
    "absdjkvuahdakejfnfauhdsaavasdlkj",
    "djfladfhiawasdkjvalskufhafablsdkashlahdfa"
  )
);
