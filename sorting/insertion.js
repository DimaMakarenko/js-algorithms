// O(n**2)

function insertion(arr) {

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    for (; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = current;
  }

  return arr;
}

console.log('first', insertion([2, 1, 6, 35, 24, 3]));
