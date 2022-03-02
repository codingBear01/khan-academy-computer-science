function insert(array, rightIndex, value) {
  // let temp;
  // for (let i = rightIndex; i >= 0; --i) {
  //   if (value < array[i]) {
  //     temp = array[i];
  //     array[i] = value;
  //     array[i + 1] = temp;
  //   }
  // }

  for (let i = rightIndex; i >= 0 && array[i] > value; --i) {
    array[i + 1] = array[i];
    array[i] = value;
  }
}

function insertionSort(array) {
  for (let i = 1; i < array.length; ++i) {
    insert(array, i - 1, array[i]);
  }
  return array;
}

const array = [3, 5, 7, 11, 13, 2, 9, 6];
console.log(insertionSort(array));
