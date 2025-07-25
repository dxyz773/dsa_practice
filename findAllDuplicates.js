function findAllDuplicates(arr) {
  const collector = {};
  const returnArr = [];
  for (const num of arr) {
    collector[num] = (collector[num] || 0) + 1;
  }

  for (const key in collector) {
    if (collector[key] === 2) {
      returnArr.push(parseInt(key));
    }
  }

  return returnArr;
}
console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1
