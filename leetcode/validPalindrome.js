let dic = {
  a: 1,
  b: 1,
  c: 1,
  d: 1,
  e: 1,
  f: 1,
  g: 1,
  h: 1,
  i: 1,
  j: 1,
  k: 1,
  l: 1,
  m: 1,
  n: 1,
  o: 1,
  p: 1,
  q: 1,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 1,
  w: 1,
  x: 1,
  y: 1,
  z: 1,
};
var isPalindrome = function (str) {
  let dic = {
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true,
    h: true,
    i: true,
    j: true,
    k: true,
    l: true,
    m: true,
    n: true,
    o: true,
    p: true,
    q: true,
    r: true,
    s: true,
    t: true,
    u: true,
    v: true,
    w: true,
    x: true,
    y: true,
    z: true,
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
  };
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    const left = str[start].toLowerCase();
    const right = str[end].toLowerCase();
    const leftYes = dic[left];
    const rightYes = dic[right];
    if (!leftYes || !rightYes) {
      if (!leftYes) start++;
      if (!rightYes) end--;
    } else if (left !== right) return false;
    else {
      start++;
      end--;
    }
  }
  return true;
};
