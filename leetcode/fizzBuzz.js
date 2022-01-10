var fizzBuzz = function (n) {
  let result = new Array();

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      result.push("Fizz");
    } else if (i % 3 !== 0 && i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
};
