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
 */
var inorderTraversal = function (root) {
  // in order means doing left, root, and then right
  // try the iterative approach by exhausting the left tree and then moving back up using pop on the stack
  // try the recursive method by adding a helper method and then traversing as far left as possible,
  // adding the results, and checking if there is a right node on the way up
};
