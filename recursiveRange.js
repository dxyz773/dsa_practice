function recursiveRange(num) {
  let accumulator = 0;
  function helper(num) {
    if (num !== 0) {
      accumulator += num;
      num--;
      helper(num);
    }
  }
  helper(num);

  return accumulator;
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
