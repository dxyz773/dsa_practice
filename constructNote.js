function constructNote(msg, letters) {
  const collector = {};

  for (const letter of letters) {
    collector[letter] = (collector[letter] || 0) + 1;
  }
  console.log(collector);
  for (const letter of msg) {
    if (!collector[letter]) {
      return false;
    } else {
      collector[letter]--;
    }
  }
  return true;
}

console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
