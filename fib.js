function fib(num) {
  if (num === 0) {
    return 0;
  }
  let prev = 0;
  let curr = 1;
  let total = 1;

  function helper(num) {
    if (num !== 0) {
      total = prev + curr;
      prev = curr;
      curr = total;
      num--;

      helper(num);
    }
  }
  helper(num - 1);
  return total;
}
console.log(fib(0));
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
