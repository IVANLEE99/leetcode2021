//二分检索
Array.prototype.binarySearch = function (item) {
  let min = 0;
  let height = this.length - 1;
  while (min <= height) {
    let mid = Math.floor((min + height) / 2);
    if (this[mid] === item) {
      return mid;
    } else if (item < this[mid]) {
      height = mid - 1;
    } else if (item > this[mid]) {
      min = mid + 1;
    }
  }
  return -1;
};
let arr = [5, 4, 3, 2, 1];
// let arr = [5, 4, 1, 2, 3, 4, 5, 3, 2, 1];
arr.binarySearch(3);
console.log(arr);
