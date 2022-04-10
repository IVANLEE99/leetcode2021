class MinHeap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(index) {
    return (index - 1) >> 1;
  }
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  getRightIndex(index) {
    return 2 * index + 2;
  }
  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
  shiftUp(index) {
    let parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getRightIndex(index);
    if (this.heap[index] > this.heap[leftIndex]) {
      this.swap(index, leftIndex);
      this.shiftDown(leftIndex);
    }
    if (this.heap[index] > this.heap[rightIndex]) {
      this.swap(index, rightIndex);
      this.shiftDown(rightIndex);
    }
  }
  //insert 插入堆元素
  insert(e) {
    this.heap.push(e);
    this.shiftUp(this.size() - 1);
  }
  //pop 堆顶顶元素出堆
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
  //返回堆顶
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

// let h = new MinHeap();
// h.insert(3);
// h.insert(2);
// h.insert(1);
// h.pop();
// h.pop();
// h.pop();
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let h = new MinHeap();
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    h.insert(element);
    // console.log(h.heap);

    if (h.size() > k) {
      h.pop();
    }
    // console.log(h.heap);
    // console.log("---");
  }
  // console.log(h.size())
  // console.log(h.heap)
  //   h.pop();
  return h.peek();
};
// findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
// findKthLargest([3, 4, 3, 5, 5]);
