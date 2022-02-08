var invertTree = function (root) {
  if (!root) return root;

  function traverse(node) {
    if (!node) return null;
    const newNode = new TreeNode(node.val);
    newNode.left = traverse(node.left);
    newNode.right = traverse(node.right);

    let temp = newNode.left;
    newNode.left = newNode.right;
    newNode.right = temp;
    return newNode;
  }
  return traverse(root);
};
