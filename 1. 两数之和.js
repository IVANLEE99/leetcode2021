/**
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const n2 = target - n; //目标对象
    //有目标对象则直接返回
    if (map.has(n2)) {
      return [map.get(n2), i];
    } else {
      //没有目标对象则先登记
      map.set(n, i);
    }
  }
};
