// COME BACK TO THIS

function countZeroes(arr) {
  let pointer = arr.length / 2;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[pointer]);
  }
}

countZeroes([1, 1, 1, 1, 0, 0]); // 2
// console.log(countZeroes([1, 0, 0, 0, 0])); // 4
// console.log(countZeroes([0, 0, 0])); // 3
// console.log(countZeroes([1, 1, 1, 1])); // 0
