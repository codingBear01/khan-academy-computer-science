// This function partitions given array and returns
//  the index of the pivot.
const partition = function (array, startIdx, lastIdx) {
  // This code has been purposefully obfuscated,
  // as you will implement it yourself in next challenge
  let partitonedArr = array,
    partitonedArrStartIdx = startIdx,
    partitonedArrLastIdx = lastIdx;

  const createPartitionedArr = function (
    partitonedArr,
    partitonedArrStartIdx,
    partitonedArrLastIdx
  ) {
    let partitonedRightArrStartIdx = partitonedArr[partitonedArrStartIdx];

    partitonedArr[partitonedArrStartIdx] = partitonedArr[partitonedArrLastIdx];
    partitonedArr[partitonedArrLastIdx] = partitonedRightArrStartIdx;
  };

  let partitonedLeftArrStartIdx = partitonedArrStartIdx;
  for (let s = partitonedArrStartIdx; s < partitonedArrLastIdx; s++) {
    if (partitonedArr[s] <= partitonedArr[partitonedArrLastIdx]) {
      createPartitionedArr(partitonedArr, s, partitonedLeftArrStartIdx);
      partitonedLeftArrStartIdx++;
    }
  }

  createPartitionedArr(
    partitonedArr,
    partitonedArrLastIdx,
    partitonedLeftArrStartIdx
  );

  return partitonedLeftArrStartIdx;
};

const quickSort = function (array, startIdx, lastIdx) {
  if (startIdx < lastIdx) {
    let midIdx = partition(array, startIdx, lastIdx);
    quickSort(array, startIdx, midIdx - 1);
    quickSort(array, midIdx + 1, lastIdx);
  }
};

const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length - 1);
console.log(array);
