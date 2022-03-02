// merge sort

// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
// var merge = function (array, p, q, r) {
//   // This code has been purposefully obfuscated,
//   //  as you'll write it yourself in next challenge.
//   var a = [],
//     b = [],
//     c = p,
//     d,
//     e;
//   // 잘라낸 배열 a, b 탐색
//   for (d = 0; c <= q; d++, c++) {
//     a[d] = array[c];
//   }

//   for (e = 0; c <= r; e++, c++) {
//     b[e] = array[c];
//   }
//   c = p;

//   for (e = d = 0; d < a.length && e < b.length; ) {
//     if (a[d] < b[e]) {
//       array[c] = a[d];
//       d++;
//     } else {
//       array[c] = b[e];
//       e++;
//     }
//     c++;
//   }

//   for (; d < a.length; ) {
//     array[c] = a[d];
//     d++;
//     c++;
//   }

//   for (; e < b.length; ) {
//     array[c] = b[e];
//     e++;
//     c++;
//   }
// };

// // Takes in an array and recursively merge sorts it
// var mergeSort = function (array, p, r) {
//   if (r > p) {
//     var q = Math.floor((r + p) / 2);
//     mergeSort(array, p, q);
//     mergeSort(array, q + 1, r);
//     merge(array, p, q, r);
//   }
// };

// var array = [14, 7, 3, 12, 9, 11, 6, 2];
// mergeSort(array, 0, array.length - 1);
// console.log("Array after sorting: " + array);
// //Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);

// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function (array, p, q, r) {
  var lowHalf = [];
  var highHalf = [];

  var k = p;
  var i;
  var j;

  for (i = 0; k <= q; i++, k++) {
    lowHalf[i] = array[k];
  }

  for (j = 0; k <= r; j++, k++) {
    highHalf[j] = array[k];
  }

  k = p;
  i = 0;
  j = 0;

  while (i < lowHalf.length && j < highHalf.length) {
    if (lowHalf[i] <= highHalf[j]) {
      array[k++] = lowHalf[i++];
    } else {
      array[k++] = highHalf[j++];
    }
  }

  while (i < lowHalf.length) {
    array[k++] = lowHalf[i++];
  }

  while (j < highHalf.length) {
    array[k++] = highHalf[j++];
  }
};

var array = [3, 7, 12, 14, 2, 6, 9, 11];
merge(array, 0, Math.floor((0 + array.length - 1) / 2), array.length - 1);
console.log("Array after merging: " + array);
//Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);
