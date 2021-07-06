function defangIPaddr(address) {
  let result = [];
  for (let i = 0; i < address.length; i++) {
    if (address[i] !== ".") {
      result.push(address[i]);
    } else {
      result.push("[");
      result.push(address[i]);
      result.push("]");
    }
  }
  return result.join("");
}

console.log(defangIPaddr("1.1.1.1")); // "1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0")); // "255[.]100[.]50[.]0"
