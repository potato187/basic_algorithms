function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min_id = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min_id] > arr[j]) {
        min_id = j;
        [arr[min_id], arr[i]] = [arr[i], arr[min_id]];
      }
    }
  }
  return arr;
}
