// This function partitions given array and returns
//  the index of the pivot.
var partition = function (array, startIdx, lastIdx) {
  // This code has been purposefully obfuscated,
  // as you will implement it yourself in next challenge
  var partitonedArr = array,
    partitonedArrStartIdx = startIdx,
    partitonedArrLastIdx = lastIdx;

  var createPartitionedArr = function (
    partitonedArr,
    partitonedArrStartIdx,
    partitonedArrLastIdx
  ) {
    var partitonedRightArrStartIdx = partitonedArr[partitonedArrStartIdx];

    partitonedArr[partitonedArrStartIdx] = partitonedArr[partitonedArrLastIdx];
    partitonedArr[partitonedArrLastIdx] = partitonedRightArrStartIdx;
  };

  var partitonedLeftArrStartIdx = partitonedArrStartIdx;
  for (var s = partitonedArrStartIdx; s < partitonedArrLastIdx; s++) {
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

var quickSort = function (array, startIdx, lastIdx) {
  if (startIdx < lastIdx) {
    var midIdx = partition(array, startIdx, lastIdx);
    quickSort(array, startIdx, midIdx - 1);
    quickSort(array, midIdx + 1, lastIdx);
  }
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length - 1);
console.log("Array after sorting: " + array);
