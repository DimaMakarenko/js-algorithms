const getDigit = (num, place) =>
  Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
const digitCount = (num) =>
  num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
const mostDigit = (nums) => {
  let maxDigits = 0;
  nums.forEach((num) => {
    maxDigits = Math.max(maxDigits, digitCount(num));
  });

  return maxDigits;
};

const radixSort = (nums) => {
  const maxDigit = mostDigit(nums);

  for (let i = 0; i < maxDigit; i++) {
    const buckets = [];
    nums.forEach((num) => {
      const digit = getDigit(num, i);
      buckets[digit] = [...(buckets[digit] || []), num];
    });
    nums = [];
    buckets.forEach((bucket) => {
      nums = [...nums, ...(bucket || [])];
    });
  }
  return nums;
};

console.log(radixSort([1, 14, 2, 292, 456, 44, 10]));
