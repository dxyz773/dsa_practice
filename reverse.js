function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  let newStr = "";
  let counter = -1;
  function helper(str) {
    if (newStr.length !== str.length) {
      newStr + str.at(counter);
      counter--;
      console.log(counter);
      helper(str);
    }
  }
  helper(str);

  return newStr;
}

console.log(reverse("awesome")); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
