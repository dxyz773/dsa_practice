function bubbleSort2(arr, comparator) {
  let swap = (index1, index2) => {
    [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (typeof comparator !== "function") {
        if (arr[j] > arr[j + 1]) {
          swap(j, j + 1);
        }
      } else {
        if (comparator(arr[j], arr[j + 1]) > 0) {
          swap(j, j + 1);
        }
      }
    }
  }

  return arr;
}

console.log(bubbleSort2([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(bubbleSort2([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(bubbleSort2([1, 2, 3])); // [1, 2, 3]
console.log(bubbleSort2([]));

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(bubbleSort2(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(bubbleSort2(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(bubbleSort2(moarKittyData, oldestToYoungest)); // sorted by age in descending order
