//插入排序
Array.prototype.insertionSort = function () {
  if (this.length <= 1) {
    return this;
  }
  //从第二轮开始往后比较
  for (let i = 1; i < this.length; i++) {
    let temp = this[i];
    let j = i;
    //往前面比较插入适当的位置
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else {
        break;
      }
      j -= 1;
    }
    this[j] = temp;
  }
};
// let arr = [5, 4, 3, 2, 1];
let arr = [5, 4, 1, 2, 3, 4, 5, 3, 2, 1];
arr.insertionSort();
console.log(arr);
