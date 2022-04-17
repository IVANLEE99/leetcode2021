//归并排序
//先分后合并
Array.prototype.mergeSort = function () {
  let merge = (arr) => {
    if (arr && arr.length === 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid); //0-mid 不包含mid
    let right = arr.slice(mid); //mid 到结尾
    let orderLeft = merge(left);
    let orderRight = merge(right);
    let res = [];
    while (orderLeft.length && orderRight.length) {
      if (orderLeft[0] < orderRight[0]) {
        res.push(orderLeft.shift());
      } else {
        res.push(orderRight.shift());
      }
    }
    if (orderLeft.length) {
      res.push(...orderLeft);
    }
    if (orderRight.length) {
      res.push(...orderRight);
    }
    return res;
  };
  let arr = merge(this);
  for (let i = 0; i < arr.length; i++) {
    this[i] = arr[i];
  }
};
let arr = [5, 4, 3, 2, 1];
// let arr = [5, 4, 1, 2, 3, 4, 5, 3, 2, 1];
arr.mergeSort();
console.log(arr);
