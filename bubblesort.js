function swap(array, a, b, i, j) {
  array[i] = b;
  array[j] = a;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] >= array[j]) {
        swap(array, array[i], array[j], i, j)
      }
    }
  }
  return array
}
