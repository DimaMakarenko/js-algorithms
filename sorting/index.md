# Sorting

**What is sorting**

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

Examples:
- Sorting number from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year

## Bubble sort

***Pseudocode***

- Start looping from with a variable called i the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1
- If arr[j] is greater than arr[j+1], swap those two values!
- Return the sorted array

## Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

***Pseudocode***

- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
- If the "minimum" is not the value (index) you initially began with, swap the two values
- Repeat this with the next element until the array is sorted

## Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted

***Pseudocode***

- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
- Repeat until the array is sorted


## Merge Sort

- It's a combination of two string - merging and sorting
- Exploits the fact that arrays of 0 to 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

### Merging Arrays

- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consist of all of the elements in the two input arrays
- This function should run in **O(n + m)** time and **O(n + m)** space and should not modify the parameters passed to it

***Pseudocode***

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at..
  - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
  - If the value in the first array in larger than the value in the second array, push the value in the second array into our result and move on to the next value in the second array
  - Once we exhaust one array, push in all remaining values from the other array

***Merge Sort Pseudocode*** 

- Break up the array into halves until you have arrays that are empty or have one element
- Once yiu have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merged (and sorted!) array

## Big O of Sorting Algorithms

Algorithm | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) |Space Complexity
--- | --- | --- | --- |--- 
Bubble Sort | O(n) | O(n⌃2) | O(n⌃2) | O(1)|
Insertion Sort | O(n) | O(n⌃2) | O(n⌃2) | O(1)|
Selection Sort | O(n^2) | O(n⌃2) | O(n⌃2) | O(1)|
Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n)
