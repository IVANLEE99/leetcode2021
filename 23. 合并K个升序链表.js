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
    if (this.heap[parentIndex]?.val > this.heap[index]?.val) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getRightIndex(index);
    if (this.heap[index]?.val > this.heap[leftIndex]?.val) {
      this.swap(index, leftIndex);
      this.shiftDown(leftIndex);
    }
    if (this.heap[index]?.val > this.heap[rightIndex]?.val) {
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
    if (this.size() === 1) return this.heap.shift();
    let top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return top;
  }
  //返回堆顶
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let res = new ListNode(0);
  let p = res;
  let h = new MinHeap();
  for (let i = 0; i < lists.length; i++) {
    const e = lists[i];
    if (e) h.insert(e);
  }
  while (h.size()) {
    let top = h.pop();
    // console.log(top.val);
    if (top.next) {
      // console.log('insert:', top.val);
      h.insert(top.next);
    }
    p.next = top;
    p = p.next;
  }
  return res.next;
};
