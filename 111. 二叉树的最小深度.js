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
 * @return {number}
 */
var minDepth = function (root) {
  //广度优先遍历，遇到叶子节点则立刻返回叶子结点的层级
  const bfs = (root, level) => {
    let q = [[root, level]];
    if (!root) {
      return 0;
    }
    while (q.length) {
      let [e, _level] = q.shift();
      if (!e.left && !e.right) {
        return _level;
      }
      if (e.left) q.push([e.left, _level + 1]);
      if (e.right) q.push([e.right, _level + 1]);
    }
  };
  return bfs(root, 1);
};
