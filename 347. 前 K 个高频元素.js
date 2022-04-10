/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 输入: nums = [1,1,1,2,2,3], k = 2
   输出: [1,2]
 */
var topKFrequent_001 = function (nums, k) {
  //1、计算频率
  //2、按频率排序
  //3、返回前k个高频元素
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    map.set(e, map.has(e) ? map.get(e) + 1 : 1);
  }
  //   console.log(map);
  //2、按频率排序
  let arr = Array.from(map).sort(([akey, aval], [bkey, bval]) => {
    return bval - aval;
  });
  //   console.log(arr);
  //3、返回前k个高频元素
  let a = arr.slice(0, k).map(([key, val]) => key);
  return a;
};

// 方法二
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

var topKFrequent = function (nums, k) {
  //1、计算频率
  //2、按频率排序 堆
  //3、返回前k个高频元素
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    map.set(e, map.has(e) ? map.get(e) + 1 : 1);
  }
  //利用最小堆进行排序
  let h = new MinHeap();
  map.forEach((key, val) => {
    h.insert({
      key: val,
      val: key,
    });
    if (h.size() > k) {
      h.pop();
    }
  });
  //   返回前k个高频元素
  return h.heap.map(({ key }) => key);
};
// topKFrequent([1, 1, 1, 2, 2, 3], 2);
// topKFrequent([1, 1, 1, 2, 2, 3], 2);
//
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([-1, -1], 1));
