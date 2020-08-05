/*
Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Follow up: Solve it both recursively and iteratively.
*/

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
 * @return {boolean}
 */

/*
//!
    1    
   / \       
  2   2     =>    2  1  2     
 / \ / \         / \   / \
3  4 4  3       3   4 4   3    =>     3 2 4 1 4 2 3
//!
//?
    1      =>   [1]
   / \       
  2   2    =>   [2, 2]      
 / \ / \
3  4 4  3  =>   [3,4,4,3]
//?
//*
false 조건 만들기
//*
*/

var isSymmetric = function (root) {
  return checkSymmetric(root, root);
};

let checkSymmetric = (target1, target2) => {
  if (target1 === null && target2 === null) return true;
  if (target1 === null || target2 === null) return false;
  if (target1.val !== target2.val) return false;
  return checkSymmetric(target1.left, target2.right) && checkSymmetric(target1.right, target2.left);
};
