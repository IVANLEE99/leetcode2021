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
 * @return {number[]}
 * 递归版本
 */
/**var inorderTraversal = function (root) {
  let res = [];
  let inorder = (n) => {
    if (!n) {
      return;
    }
    inorder(n.left);
    res.push(n.val);
    inorder(n.right);
  };
  inorder(root);
  return res;
};*/
//非递归版本
var inorderTraversal = function (root) {
  let res = [];
  let q = [];
  let p = root;
  while (q.length || p) {
    while (p) {
      q.push(p);
      p = p.left;
    }
    let e = q.pop();
    res.push(e.val);
    p = e.right;
  }
  return res;
};
