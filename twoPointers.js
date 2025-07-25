function countUniqueValues(arr) {
  const unique = {};

  for (const x of arr) {
    if (!unique[x]) {
      unique[x] = x;
    }
  }
  return Object.keys(unique).length;
}

// console.log(countUniqueValues([]));

function countUniqueValues2(arr) {
  let turtle = 0;
  let hare = 1;

  while (hare < arr.length) {
    if (arr[turtle] === arr[hare]) {
      hare++;
    } else {
      turtle++;
      arr[turtle] = arr[hare];
      hare++;
    }
  }
  console.log(turtle + 1);
  return turtle ? turtle + 1 : 0;
}

countUniqueValues2([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]);
