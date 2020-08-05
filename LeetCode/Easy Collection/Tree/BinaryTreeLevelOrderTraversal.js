/*
Binary Tree Level Order Traversal

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
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
  if (!root) return [];
  let levelOrderArr = [];

  let makeEachLevelOrder = (parent, depth) => {
    if (parent) {
      if (levelOrderArr.length === depth) {
        levelOrderArr.push([]);
      }
      let eachLevelOrderArr = levelOrderArr[depth];
      eachLevelOrderArr.push(parent.val);
      makeEachLevelOrder(parent.left, depth + 1);
      makeEachLevelOrder(parent.right, depth + 1);
    } else {
      return;
    }
  };
  makeEachLevelOrder(root, 0);
  return levelOrderArr;
};
