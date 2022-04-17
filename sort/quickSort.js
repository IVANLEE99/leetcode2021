//快速排序
//1、先找一个基准mid，比这个基准小的放在mid左边，比基准大的放在mid右边
//2、接着对基准左边进行递归 和 基准右边进行递归
//3、返回排好序的最边 +基准+ 右边
Array.prototype.quickSort = function () {
  let merge = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    let mid = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
      const e = arr[i];
      if (e < mid) {
        left.push(e);
      } else {
        right.push(e);
      }
    }
    return [...merge(left), mid, ...merge(right)];
  };
  let arr = merge(this);
  for (let i = 0; i < arr.length; i++) {
    this[i] = arr[i];
  }
};
// let arr = [5, 4, 3, 2, 1];
let arr = [5, 4, 1, 2, 3, 4, 5, 3, 2, 1];
arr.quickSort();
console.log(arr);
