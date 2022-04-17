//冒泡排序
Array.prototype.bubbleSort = function () {
  //   console.log(this);
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
      //   console.log(this);
    }
  }
};
let arr = [5, 4, 3, 2, 1];
arr.bubbleSort();
// console.log(arr);
