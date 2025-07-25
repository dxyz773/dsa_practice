function findPair(arr, val) {
  const collector = {};
  for (const el of arr) {
    collector[el] = (collector[el] || 0) + 1;
  }

  let counter = 0;
  for (const key in collector) {
    if (val === 0 && collector[key] === 1) {
      counter += 1;
    }
  }

  if (counter === arr.length) return false;

  for (const key in collector) {
    if (collector[parseInt(key) - val]) return true;
  }
  return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5, 5], 0)); // true
console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true
console.log(findPair([1, 2, 3, 5, 6, 7, 8, 9, 10, 100], 0)); // false
