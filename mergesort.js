function split(array) {
  const firstHalf = array.slice(0, Math.ceil((array.length - 1) / 2));
  const secondHalf = array.slice(Math.ceil((array.length - 1) / 2));

  return [firstHalf, secondHalf]
}

function merge(arr1, arr2) {
  let mergedArray = [];
  const num = arr1.length + arr2.length
  for (let i = 0; i < num; i++) {
    if (arr1[0] && !arr2[0]) {
      mergedArray.push(arr1[0])
      arr1.shift()
    } else if (!arr1[0] && arr2[0]) {
      mergedArray.push(arr2[0])
      arr2.shift()
    } else {
      if (arr1[0] < arr2[0]) {
        mergedArray.push(arr1[0]);
        arr1.shift()
      } else {
        mergedArray.push(arr2[0]);
        arr2.shift()
      }
    }
  }
  return mergedArray
}

function mergeSort(array) {
  if (array.length > 1) {
    const nestedArray = split(array);
    let num1 = mergeSort(nestedArray[0]);
    let num2 = mergeSort(nestedArray[1]);
    return merge(num1, num2)
  } else {
    return array
  }
}
