function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const frequency1 = {};
  const frequency2 = {};

  for (const val of str1) {
    frequency1[val] = (frequency1[val] || 0) + 1;
  }
  for (const val of str2) {
    frequency2[val] = (frequency2[val] || 0) + 1;
  }

  for (const key in frequency1) {
    if (!key in frequency2) return false;
    if (frequency1[key] !== frequency2[key]) return false;
  }
  console.log(frequency1);
  console.log(frequency2);
  return true;
}

function isAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;
  const collector = {};

  for (const val of str1) {
    collector[val] = (collector[val] || 0) + 1;
  }

  for (const val of str2) {
    if (!collector[val]) {
      return false;
    } else {
      collector[val] -= 1;
    }
  }

  return true;
}

console.log(isAnagram2("anagram", "nagaram"));
console.log(isAnagram2("aaz", "zza"));
