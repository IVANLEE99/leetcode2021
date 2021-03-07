/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [...nums1, ...nums2];
    arr = arr.sort((a, b) => a - b);
    let _middle = Math.floor(arr.length / 2);
    let middle = arr.length % 2 == 0 ? [arr[_middle - 1], arr[_middle]] : [arr[_middle], arr[_middle]]
    return (middle[0] + middle[1]) / 2
};

// console.log(findMedianSortedArrays([1,3], [2]));
// console.log(findMedianSortedArrays([1,2],  [3,4]));
console.log(findMedianSortedArrays([3], [-2, -1]));
// console.log(findMedianSortedArrays([0,0],  [0,0]));
// console.log(findMedianSortedArrays([],  [1]));
// console.log(findMedianSortedArrays([2],  []));



