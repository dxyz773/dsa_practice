// function maxSubarraySum(arr, fixedLength) {
//   if (arr.length < fixedLength) return null;

//   let maxSum = 0;
//   let currentRunningSum = 0;

//   for (let i = 0; i < fixedLength; i++) {
//     maxSum += arr[i];
//   }

//   currentRunningSum = maxSum;

//   for (let i = fixedLength; i < arr.length; i++) {
//     currentRunningSum = currentRunningSum - arr[i - fixedLength] + arr[i];
//     maxSum = Math.max(maxSum, currentRunningSum);
//   }
//   return maxSum;
// }

function maxSubarraySum(arr, fixedLength) {
  if (arr.length < fixedLength) return null;

  let runningSum = 0;
  let maxSum = -Infinity;

  for (let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
    runningSum += arr[currentIndex];
    if (currentIndex >= fixedLength - 1) {
      maxSum = Math.max(maxSum, runningSum);
      runningSum -= arr[currentIndex - (fixedLength - 1)];
    }
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
