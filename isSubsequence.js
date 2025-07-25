function isSubsequence(subStr, comparisonStr) {
  if (!subStr || !comparisonStr || subStr.length > comparisonStr.length)
    return false;

  let subStrIndex = 0;
  let comparisonIndex = 0;
  let comparison = "";

  while (comparisonIndex < comparisonStr.length) {
    if (subStr[subStrIndex] === comparisonStr[comparisonIndex]) {
      comparison += comparisonStr[comparisonIndex];
      subStrIndex++;
    }

    comparisonIndex++;
    if (comparison === subStr) return true;
  }

  return false;
}
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
