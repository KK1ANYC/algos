function reverseString(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

console.log(reverseString(["h", "e", "l", "l", "o"])); //["o","l","l","e","h"]
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); //["h","a","n","n","a","H"]
