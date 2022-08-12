# Sorting

**What is sorting**

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

Examples:
- Sorting number from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year

**Bubble sort**

***Pseudocode***

- Start looping from with a variable called i the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1
- If arr[j] is greater than arr[j+1], swap those two values!
- Return the sorted array

**Selection Sort**

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

***Pseudocode***

- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
- If the "minimum" is not the value (index) you initially began with, swap the two values
- Repeat this with the next element until the array is sorted