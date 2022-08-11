## Linear Search

Given an array, the simplest way to search for an value is to look at every element in the array  and check if it's the value we want 

Search methods on array in JS: indexOf, includes, find, findIndex

**Linear Search Pseudocode**

- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element if found
- If the value is never found, return -1

## Binary Search

- Binary search is a mush faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Binary search only works on sorted arrays!

**Binary Search Pseudocode**

- This function accepts a sorted array and a value
- Create a left point at the start of the array and a right point at the end of the array
- While the left pointer comes before the right pointer: 
  - Create a pint in the middle
  - If you find the value you want, return the index
  - If the value is too small, move the left pointer up
  - If the value is too large, move the left pointer down
- If you never find the value, return -1


## Naive string

**Naive string Pseudocode**

- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break you of the inner loop
- If the characters do match, keep going
- If the complete the inner loop and find a match, increment the count of matches
- Return the count