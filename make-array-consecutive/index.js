function makeArrayConsecutive(arr) {
  let arrSort = arr.sort((a, b) => a - b);
  let newArr = [];
  for (let i = 1; i < arrSort.length; i++) {
    for (let number = arr[i - 1]; number < arr[i]; number++) {
      if (number > arr[i - 1]) {
        newArr.push(number);
      }
    }
  }

  return newArr;
}

module.exports = makeArrayConsecutive;
