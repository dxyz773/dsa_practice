function areThereDuplicates(...args) {
  if (args.length < 1) return false;

  const collector = {};

  for (const arg of args) {
    collector[arg] = (collector[arg] || 0) + 1;
  }

  for (const key in collector) {
    if (collector[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
