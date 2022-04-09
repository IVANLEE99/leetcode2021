/**
 * @param {number[][]} heights
 * [
 *  [1,2,2,3,5],
 *  [3,2,3,4,4],
 *  [2,4,5,3,1],
 *  [6,7,1,4,5],
 *  [5,1,1,2,4]
 * ]
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  if (!heights || !heights[0]) {
    return [];
  }
  let _r = heights.length; //多少行
  let _c = heights[0].length; //多少列
  let flow1 = Array.from(
    {
      length: _r,
    },
    () => new Array(_c).fill(false)
  );
  let flow2 = Array.from(
    {
      length: _r,
    },
    () => new Array(_c).fill(false)
  );
  //   console.log(flow1);
  //   console.log(flow2);
  const dfs = (r, c, flow) => {
    flow[r][c] = true;
    //上下左右四个点开始遍历
    let _arr = [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ];
    _arr.forEach(([nr, nc]) => {
      //在矩阵范围内
      //没有访问过
      //逆流而上
      //   console.log(nr, nc);
      if (
        //在矩阵范围内
        nr >= 0 &&
        nr < _r &&
        nc >= 0 &&
        nc < _c &&
        //没有访问过
        !flow[nr][nc] &&
        //可以逆流而上
        heights[nr][nc] >= heights[r][c]
      ) {
        dfs(nr, nc, flow);
      }
    });
  };
  for (let i = 0; i < _r; i++) {
    //左侧太平洋
    dfs(i, 0, flow1);
    //右侧大西洋
    dfs(i, _c - 1, flow2);
  }
  for (let i = 0; i < _c; i++) {
    //上侧太平洋
    dfs(0, i, flow1);
    //底侧大西洋
    dfs(_r - 1, i, flow2);
  }
  let res = [];
  for (let r = 0; r < _r; r++) {
    for (let c = 0; c < _c; c++) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c]);
      }
    }
  }
  return res;
};

// let r = pacificAtlantic([
//   [1, 2, 2, 3, 5],
//   [3, 2, 3, 4, 4],
//   [2, 4, 5, 3, 1],
//   [6, 7, 1, 4, 5],
//   [5, 1, 1, 2, 4],
// ]);
// [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// console.log(r);

let r = pacificAtlantic([
  [3, 3, 3, 3, 3, 3],
  [3, 0, 3, 3, 0, 3],
  [3, 3, 3, 3, 3, 3],
]);
console.log(r);
