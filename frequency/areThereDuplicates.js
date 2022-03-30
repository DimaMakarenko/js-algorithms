// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in. 

function areThereDuplicates(...args) {
    const list = {};

    for (let value of args) {
        list[value] = (list[value] || 0) + 1;
        if (list[value] > 1) {
            return true;
        }
    }

    return false;
}