//Easy

https://leetcode.com/problems/reverse-linked-list/
//O(n) time complexity
var reverseList = function (head) {
    let pre = null
    while (head) {
        const next = head.next
        head.next = pre
        pre = head
        head = next
    }
    return pre
};


https://leetcode.com/problems/binary-tree-paths/
var binaryTreePaths = function(root) {
    let result = new Array()
    dfs(root, "")

    function dfs (root, currentPath) {
        if (root === null) {
            return
        }
        if (root.left == null && root.right == null) {
            currentPath += root.val
            result.push(currentPath)
            return
        }
        dfs(root.left, currentPath + root.val + `->`)
        dfs(root.right, currentPath + root.val + `->`)
    }
    return result
};

https://leetcode.com/problems/first-unique-character-in-a-string/
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

https://leetcode.com/problems/valid-anagram/
//O(n) time complexity
var isAnagram = function(s, t) {
    let hash = {}
    let result = true

    if (s.length !== t.length) return false

    for (let i = 0; i < s.length; i++) {
        if (!hash[s[i]]) hash[s[i]] = 1
        else hash[s[i]]++
    }

    for (let i = 0; i < t.length; i++) {
        if (hash[t[i]]) hash[t[i]]--
        else {
            return false
        }
    }

    return result
};

https://leetcode.com/problems/palindrome-number/
// O(n) time complexity
function isPalindrome(x) {
    if (x < 0) return false

    x = x.toString()

    let left = 0
    let right = x.length - 1

    while (left <= right) {
        if (x[left] !== x[right]) return false
        left++
        right--
    }

    return true
}

https://leetcode.com/problems/intersection-of-two-linked-lists/
// O(n) time complexity
var getIntersectionNode = function (headA, headB) {
    let hA = headA;
    let hB = headB;
    while (hA !== hB) {
        hA = hA === null ? headB : hA.next;
        hB = hB === null ? headA : hB.next;
    };
    return hA;
};

https://leetcode.com/problems/two-sum/
//O(n) time complexity
var twoSum = function (nums, target) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (hash[diff] >= 0) {
            return [hash[diff], i]
        } else if (!hash[nums[i]]) {
            hash[nums[i]] = i
        }
    }
};

https://leetcode.com/problems/min-stack/

https://leetcode.com/problems/valid-parentheses/
//O(n) time complexity
var isValid = function(s) {
    let hash = {
        ")": "(",
        "}": "{",
        "]": "[",
    }

    let arr = new Array()

    for (let i = 0; i < s.length; i++) {
        let lastEl = arr[arr.length - 1]
        if (lastEl === hash[s[i]] && lastEl !== undefined && hash[s[i]] !== undefined){
            arr.pop()
        } else {
            arr.push(s[i])
        }
    }
    if (arr.length == 0) {
        return true
    } else {
        return false
    }
};

https://leetcode.com/problems/merge-two-sorted-lists/

