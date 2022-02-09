//O(n^2) time and space complexity
var levelOrder = function (root) {
  if (!root) return [];
  const results = [];
  const queue = [root];

  while (queue.length) {
    const current_level_length = queue.length;
    const current_level_values = [];

    for (let i = 0; i < current_level_length; i++) {
      const node = queue.shift();
      current_level_values.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    results.push(current_level_values);
  }

  return results;
};
