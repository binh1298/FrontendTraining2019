function max() {
  let result = -Infinity;
  for (let number of arguments) {
      if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));  // --> 9