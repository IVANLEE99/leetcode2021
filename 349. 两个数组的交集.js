/**
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (!nums1 || !nums1.length || !nums2 || !nums2.length) {
    return [];
  }
  const map = new Map();
  nums1.forEach((item) => map.set(item, true));
  const res = [];
  nums2.forEach((item) => {
    if (map.get(item)) {
      res.push(item);
      map.delete(item);
    }
  });
  return res;
};
