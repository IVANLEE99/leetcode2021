//顺序检索排序
Array.prototype.sequentialSearch = function (item) {
  for (let i = 0; i < this.length; i++) {
    const e = this[i];
    if (e === item) {
      return i;
    }
  }
  return -1;
};
// let arr = [5, 4, 3, 2, 1];
let arr = [5, 4, 1, 2, 3, 4, 5, 3, 2, 1];
arr.sequentialSearch(3);
console.log(arr);
