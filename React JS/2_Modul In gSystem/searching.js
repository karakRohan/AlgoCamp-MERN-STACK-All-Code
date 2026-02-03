export function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // return index
        }
    }
    return -1; // not found
}

// Example
console.log(linearSearch([5, 3, 8, 4, 2], 8)); // Output: 2

export function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// Example
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5)); // Output: 4


export function ternarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid1 = left + Math.floor((right - left) / 3);
        let mid2 = right - Math.floor((right - left) / 3);

        if (arr[mid1] === target) return mid1;
        if (arr[mid2] === target) return mid2;

        if (target < arr[mid1]) {
            right = mid1 - 1;
        } else if (target > arr[mid2]) {
            left = mid2 + 1;
        } else {
            left = mid1 + 1;
            right = mid2 - 1;
        }
    }
    return -1;
}

// Example
console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7], 6)); // Output: 5


// export { linearSearch, binarySearch, ternarySearch };

export default 10;

module.export = { linearSearch, binarySearch, ternarySearch };
