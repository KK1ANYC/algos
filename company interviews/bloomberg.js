//Easy

//https://leetcode.com/problems/reverse-linked-list/
//O(n) time complexity
var reverseList = function (head) {
  let pre = null;
  while (head) {
    const next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};

//https://leetcode.com/problems/binary-tree-paths/
var binaryTreePaths = function (root) {
  let result = new Array();
  dfs(root, "");

  function dfs(root, currentPath) {
    if (root === null) {
      return;
    }
    if (root.left == null && root.right == null) {
      currentPath += root.val;
      result.push(currentPath);
      return;
    }
    dfs(root.left, currentPath + root.val + `->`);
    dfs(root.right, currentPath + root.val + `->`);
  }
  return result;
};

//https://leetcode.com/problems/first-unique-character-in-a-string/
// O(n) time complexity
var firstUniqChar = function (s) {
  let hash = {};
  let result = -1;

  for (char of s) {
    if (!hash[char]) hash[char] = 1;
    else hash[char]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] == 1) {
      result = i;
      break;
    }
  }
  return result;
};

//https://leetcode.com/problems/valid-anagram/
//O(n) time complexity
var isAnagram = function (s, t) {
  let hash = {};
  let result = true;

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) hash[s[i]] = 1;
    else hash[s[i]]++;
  }

  for (let i = 0; i < t.length; i++) {
    if (hash[t[i]]) hash[t[i]]--;
    else {
      return false;
    }
  }

  return result;
};

//https://leetcode.com/problems/palindrome-number/
// O(n) time complexity
function isPalindrome(x) {
  if (x < 0) return false;

  x = x.toString();

  let left = 0;
  let right = x.length - 1;

  while (left <= right) {
    if (x[left] !== x[right]) return false;
    left++;
    right--;
  }

  return true;
}

//https://leetcode.com/problems/intersection-of-two-linked-lists/
// O(n) time complexity
var getIntersectionNode = function (headA, headB) {
  let hA = headA;
  let hB = headB;
  while (hA !== hB) {
    hA = hA === null ? headB : hA.next;
    hB = hB === null ? headA : hB.next;
  }
  return hA;
};

//https://leetcode.com/problems/two-sum/
//O(n) time complexity
var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hash[diff] >= 0) {
      return [hash[diff], i];
    } else if (!hash[nums[i]]) {
      hash[nums[i]] = i;
    }
  }
};

//https://leetcode.com/problems/min-stack/
var MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
};

MinStack.prototype.pop = function () {
  if (this.stack.length > 0) {
    this.stack.pop();
  }
};

MinStack.prototype.top = function () {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1];
  }
};

MinStack.prototype.getMin = function () {
  let min = Infinity;
  if (this.stack.length > 0) {
    for (let i = 0; i < this.stack.length; i++) {
      if (this.stack[i] < min) {
        min = this.stack[i];
      }
    }
  }
  return min;
};

//https://leetcode.com/problems/valid-parentheses/
//O(n) time complexity
var isValid = function (s) {
  let hash = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let arr = new Array();

  for (let i = 0; i < s.length; i++) {
    let lastEl = arr[arr.length - 1];
    if (
      lastEl === hash[s[i]] &&
      lastEl !== undefined &&
      hash[s[i]] !== undefined
    ) {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  if (arr.length == 0) {
    return true;
  } else {
    return false;
  }
};

//https://leetcode.com/problems/merge-two-sorted-lists/
//O(2 n) time complexity
var mergeTwoLists = function (l1, l2) {
  let list = new ListNode();
  let head = list;

  while (l1 !== null && l2 !== null) {
    // Select the smallest value from either linked list,
    // then increment that list forward.
    if (l1.val < l2.val) {
      list.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      list.next = new ListNode(l2.val);
      l2 = l2.next;
    }

    list = list.next;
  }

  // It's possible that one linked list is shorter than the other so we just
  // add on the remainder of the last linked list. It's already sorted :)
  if (l1 !== null) list.next = l1;
  if (l2 !== null) list.next = l2;

  // return .next because this first element in the linkedlist is empty
  return head.next;
};

//Medium
//https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/

//https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/

//https://leetcode.com/problems/sort-characters-by-frequency/
//O(n^2) time complexity
var frequencySort = function (s) {
  let hash = {};
  let result = "";

  for (let char of s) {
    if (!hash[char]) hash[char] = 1;
    else hash[char]++;
  }

  while (result.length !== s.length) {
    let max = 0;
    let char = "";

    for (let key in hash) {
      if (hash[key] > max) {
        max = hash[key];
        char = key;
      }
    }

    for (let i = 0; i < max; i++) {
      result += char;
    }

    hash[char] = 0;
  }

  return result;
};

//https://leetcode.com/problems/add-two-numbers-ii/
//O(n) time complexity
var addTwoNumbers = function (l1, l2) {
  let stack1 = [];
  let stack2 = [];

  while (l1 !== null || l2 !== null) {
    if (l1) {
      stack1.push(l1.val);
      l1 = l1.next;
    }
    if (l2) {
      stack2.push(l2.val);
      l2 = l2.next;
    }
  }

  let l3 = new ListNode(0);

  while (stack1.length || stack2.length) {
    let sum = 0;
    if (stack1.length) sum += stack1.pop();
    if (stack2.length) sum += stack2.pop();
    sum += l3.val;
    l3.val = sum % 10;
    let head = new ListNode(Math.floor(sum / 10));
    head.next = l3;
    l3 = head;
  }
  return l3.val === 0 ? l3.next : l3;
};

//https://leetcode.com/problems/shuffle-an-array/

//https://leetcode.com/problems/range-sum-query-2d-immutable/

//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
//O(log n) time complexity
var findMin = function (nums) {
  nums = nums.sort((a, b) => a - b);
  return nums[0];
};


