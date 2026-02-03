function swap(arr, i, j) {
    // Swap
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
    
}

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr,j,j+1);
                swapped = true;
            }
        }
        // If no elements were swapped, array is sorted
        if (!swapped) break;
    }
    return arr;
}

// Example usage:
let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted Array:", bubbleSort(numbers));


// export default bubbleSort;  // normal default export

module.exports = bubbleSort; // default export
