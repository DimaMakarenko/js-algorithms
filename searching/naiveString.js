function naiveSearch(long, short) {
  let count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

naiveSearch('hello hehho', 'heh');