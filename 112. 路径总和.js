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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }
  let res = false;
  //深度优先
  const dfs = (root, s) => {
    if (!root) {
      return;
    }
    if (!root.left && !root.right && s === targetSum) {
      res = true;
    }
    if (res) {
      return;
    }
    if (root.left) {
      dfs(root.left, s + root.left.val);
    }
    if (root.right) {
      dfs(root.right, s + root.right.val);
    }
  };
  dfs(root, root.val);
  return res;
};
