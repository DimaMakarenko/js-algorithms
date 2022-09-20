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



## Big O of Sorting Algorithms

Algorithm | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) |Space Complexity
--- | --- | --- | --- |--- 
Bubble Sort | O(n) | O(n⌃2) | O(n⌃2) | O(1)|
Insertion Sort | O(n) | O(n⌃2) | O(n⌃2) | O(1)|
Selection Sort | O(n^2) | O(n⌃2) | O(n⌃2) | O(1)|
