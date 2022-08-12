
// O (n**2)
// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 1; j < i; j++) {
//       if (arr[j] < arr[j - 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//       }
//     }
//   }
//   return arr;
// }


function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let isSwapped = false;

    for (let j = 1; j < i; j++) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      return arr;
    }
  }
  return arr;
}

bubbleSort([6, 2, 14, 6, 10, 1])