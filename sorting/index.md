# Sorting

[Visualgo](https://visualgo.net/en/sorting)

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


## Quick Sort

- Like merge sort, exploits the fact that arrays of 0 to 1 element are always sorted
- Works by selecting one element (called the "pivot") and finding the index where the pivot should ent up in the sorted array
- Once the pivot is po positioned appropriately, quick sort can be applied on either side of the pivot

***Pivot helper***

- In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
- Given an array, this helper function should designate an element as the pivot
- It should then rearrange elements in the array so that all values less that the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
- The order of elements on either side of the pivot doesn't matter!
- The helper should do this in place, that is, it should not create a new array
- When complete, the helper should return the index of the pivot

***Picking a pivot***

- The runtime of quick sort depends in part on how one select the pivot
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
- For simplicity, we'll always choose the pivot to be the first element

***Pivot Pseudocode***

- It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and array length minus 1, respectively)
- Grab the pivot from the start of the array
- Store the current pivot index in a variable (this will keep track of where the pivot should end up)
- Loop through the array from the start until the end 
  - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
- Swap the starting element (i.e. the pivot) with pivot index
- Return the pivot index

***Quicksort Pseudocode***

- Call the pivot helper on the array
- When the helper returns to you the updated pivot index, recursively call the pivot helper on the sub array to the left on that index, and the sub array to the right of that index
- Your base case occurs when you consider a sub array with less than 2 elements

## Big O of Sorting Algorithms

Algorithm | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) |Space Complexity
--- | --- | --- | --- |--- 
Bubble Sort | O(n) | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(1)|
Insertion Sort | O(n) | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(1)|
Selection Sort | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(1)|
Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n)
Quick Sort | O(n log n) | O(n log n) | O(n<sup>2</sup>) | O(log n)
