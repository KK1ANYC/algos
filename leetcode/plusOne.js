function plusOne(digits) {
  let co = true;
  for (let i = digits.length - 1; i >= 0 && co; i--) {
    digits[i]++;
    co = digits[i] >= 10;
    co && (digits[i] = 0);
  }
  co && digits.unshift(1);
  return digits;
}


