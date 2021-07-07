//example 1
var isPalindrome = function (head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  let check = [];
  for (let i = result.length - 1; i >= 0; i--) {
    check.push(result[i]);
  }
  if (result.join("") === check.join("")) return true;
  else return false;
};

console.log(isPalindrome([1, 2, 2, 1]));
// Input: head = [1,2,2,1]
// Output: true

console.log(isPalindrome([1, 2]));
// Input: head = [1,2]
// Output: false

//example 2
var isPalindrome = function(head) {
  let straight = '';
  let reversed = '';
  while (head) {
      straight += head.val;
      reversed = head.val + reversed;
      head = head.next;
  };
  return straight === reversed;
};
