/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

//深度优先
var cloneGraph002 = function (node) {
  //1、先克隆node
  //2、接着克隆neighbors
  if (!node) {
    return;
  }
  const visited = new Map();
  const dfs = (n) => {
    //复制结点
    visited.set(n, new Node(n.val));
    (n.neighbors || []).forEach((ne) => {
      if (!visited.get(ne)) {
        dfs(ne);
      }
      //复制边
      visited.get(n).neighbors.push(visited.get(ne));
    });
  };
  dfs(node);
  return visited.get(node);
};

//广度优先
var cloneGraph = function (node) {
  //1、先克隆node
  //2、接着克隆neighbors
  if (!node) {
    return;
  }
  const visited = new Map();
  let q = [node];
  visited.set(node, new Node(node.val));
  while (q.length) {
    let e = q.shift();
    (e.neighbors || []).forEach((ne) => {
      if (!visited.get(ne)) {
        q.push(ne);
        visited.set(ne, new Node(ne.val));
      }
      visited.get(e).neighbors.push(visited.get(ne));
    });
  }
  return visited.get(node);
};
