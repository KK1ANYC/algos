var findWords = function (words) {
  let result = [];
  let firstHash = {
    q: "q",
    w: "w",
    e: "e",
    r: "r",
    t: "t",
    y: "y",
    u: "u",
    i: "i",
    o: "o",
    p: "p",
  };
  let secondHash = {
    a: "a",
    s: "s",
    d: "d",
    f: "f",
    g: "g",
    h: "h",
    j: "j",
    k: "k",
    l: "l",
  };
  let thirdHash = { z: "z", x: "x", c: "c", v: "v", b: "b", n: "n", m: "m" };
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    let firstCount = 0;
    let secondCount = 0;
    let thirdCount = 0;
    for (let k = 0; k < word.length; k++) {
      let char = word[k];
      if (firstHash[char]) {
        firstCount++;
      }
      if (secondHash[char]) {
        secondCount++;
      }
      if (thirdHash[char]) {
        thirdCount++;
      }
    }
    if (
      firstCount === word.length ||
      secondCount === word.length ||
      thirdCount === word.length
    ) {
      result.push(words[i]);
    }
  }
  return result;
};

