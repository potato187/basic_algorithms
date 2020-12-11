function prefixSums(arrA) {
  const arrB = [];
  arrB.push(arrA[0]);
  for (let i = 1; i < arrA.length; i++) {
    arrB.push(arrB[i-1] + arrA[i]);
  }
  return arrB;
}


console.log(prefixSums([1, 2, 3, -6]));
