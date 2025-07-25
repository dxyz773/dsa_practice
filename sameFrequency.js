function sameFrequency(num1, num2) {
  const number1 = num1 + "";
  const number2 = num2 + "";

  if (number1.length !== number2.length) return false;

  const group1 = {};
  const group2 = {};

  for (const val of number1) {
    group1[val] = (group1[val] || 0) + 1;
  }
  for (const val of number2) {
    group2[val] = (group2[val] || 0) + 1;
  }

  for (const key in group1) {
    if (!key in group2) return false;
    if (group1[key] !== group2[key]) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
