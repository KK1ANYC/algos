
//example 1
var backspaceCompare = function (s, t) {
  let stack1 = [];
  let stack2 = [];
  let max = s.length >= t.length ? s.length : t.length;
  let count = 0;
  while (count <= max) {
    if (s[count] !== "#") stack1.push(s[count]);
    if (s[count] === "#") stack1.pop();
    if (t[count] !== "#") stack2.push(t[count]);
    if (t[count] === "#") stack2.pop();
    count++;
  }
  return stack1.join("") === stack2.join("");
};



//example 2
var backspaceCompare = function (s, t) {
  let stack1 = [];
  let stack2 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") stack1.push(s[i]);
    else stack1.pop();
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== "#") stack2.push(t[i]);
    else stack2.pop();
  }
  return stack1.join("") === stack2.join("");
};
