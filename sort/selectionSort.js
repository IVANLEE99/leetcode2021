//选择排序
Array.prototype.selectionSort = function () {
  // this.length-1 轮
  for (let i = 0; i < this.length - 1; i++) {
    //每一轮选择最小值放到第i个位置
    let minIndex = i;
    for (let j = i; j < this.length; j++) {
      if (this[j] < this[minIndex]) {
        minIndex = j;
      }
    }
    if (this[i] !== this[minIndex]) {
      let temp = this[i];
      this[i] = this[minIndex];
      this[minIndex] = temp;
    }
  }
};
// let arr = [5, 4, 3, 2, 1];
let arr = [5, 4, 1, 2, 3, 4, 5, 3, 2, 1];
arr.selectionSort();
// console.log(arr);
