const maxRepeating = (sequence, word) => {
  let str = word;
  let count = 0;
  while (sequence.includes(str)) {
    count++;
    str += word;
  }
  return count;
};
