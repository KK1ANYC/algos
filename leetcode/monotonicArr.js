//O(n) time complexity and O(1) space complexity

var isMonotonic = function (nums) {
  let increment = 1;
  let decrement = 1;
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= prev) {
      increment++;
    }
    if (nums[i] <= prev) {
      decrement++;
    }
    prev = nums[i];
  }
  if (increment === nums.length || decrement === nums.length) {
    return true;
  } else {
    return false;
  }
};

/*
set a variable to count for increment and decrement
set a prev number at nums[0]
for loop over nums
check if i is >= or <= prev num
increment the ones that are true
check if increment or decrement is = to the length of nums arr

*/

var findWords = function (words) {
  let result = [];
  let hash = {
    q: 1,
    w: 1,
    e: 1,
    r: 1,
    t: 1,
    y: 1,
    u: 1,
    i: 1,
    o: 1,
    p: 1,
    a: 2,
    s: 2,
    d: 2,
    f: 2,
    g: 2,
    h: 2,
    j: 2,
    k: 2,
    l: 2,
    z: 3,
    x: 3,
    c: 3,
    v: 3,
    b: 3,
    n: 3,
    m: 3,
    Q: 1,
    W: 1,
    E: 1,
    R: 1,
    T: 1,
    Y: 1,
    U: 1,
    I: 1,
    O: 1,
    P: 1,
    A: 2,
    S: 2,
    D: 2,
    F: 2,
    G: 2,
    H: 2,
    J: 2,
    K: 2,
    L: 2,
    Z: 3,
    X: 3,
    C: 3,
    V: 3,
    B: 3,
    N: 3,
    M: 3,
  };

  for (let word of words) {
    let count = 0;
    for (let letter of word) {
      count += hash[letter];
    }
    if (hash[word[0]] === count / word.length) {
      result.push(word);
    }
  }
  return result;
};
