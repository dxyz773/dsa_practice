function productOfArray(arr) {
  let num = arr[0];

  function helper(arr) {
    if (arr.length !== 0) {
      num *= arr[0];
      helper(arr.slice(1));
    }
  }
  helper(arr.slice(1));

  return num;
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
