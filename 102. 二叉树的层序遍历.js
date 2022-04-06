/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let q = [root];
  let res = [];
  while (q.length) {
    //记录当前层级别有length个元素
    let length = q.length;
    res.push([]);
    while (length--) {
      //  清空length当前层级别有多少个元素
      let e = q.shift();
      res[res.length - 1].push(e.val);
      // 加入下一层的元素
      if (e.left) {
        q.push(e.left);
      }
      //加入下一层的元素
      if (e.right) {
        q.push(e.right);
      }
    }
    //清空后进入下一次循环
  }
  return res;
};
