// https://www.geeksforgeeks.org/interval-tree/
class Interval {
  constructor(low, high) {
    this.low = low;
    this.high = high;
  }

  toString() {
    return "[" + this.low + "," + this.high + "]";
  }
}

class Node {
  constructor(range, max) {
    this.range = range;
    this.max = max;
    this.left = null;
    this.right = null;
  }

  toString() {
    return "[" + this.range.low + ", " + this.range.high + "] " + "max = " + this.max + "\n";
  }
}

function insert(root, x) {
  if (!root) {
    return new Node(x, x.high);
  }

  if (x.low < root.range.low) {
    root.left = insert(root.left, x);
  } else {
    root.right = insert(root.right, x);
  }

  if (root.max < x.high) {
    root.max = x.high;
  }

  return root;
}

function inOrder(root) {
  if (!root) {
    return;
  }

  inOrder(root.left);
  console.log(root.toString());
  inOrder(root.right);
}

function isOverlapping(root, x) {
  if (!root) {
    return new Interval(-1, -1);
  }

  if (x.low > root.range.low && x.low < root.range.high ||
    (x.high > root.range.low && x.high < root.range.high)) {
    return root.range;
  } else if (root.left != null && root.left.max > x.low) {
    return isOverlapping(root.left, x);
  } else {
    return isOverlapping(root.right, x);
  }
}

let root = null;
root = insert(null, new Interval(15, 20));
root = insert(root, new Interval(10, 30));
root = insert(root, new Interval(17, 19));
root = insert(root, new Interval(5, 20));
root = insert(root, new Interval(12, 15));
root = insert(root, new Interval(30, 40));

console.log("Inorder traversal of constructed Interval Tree is");
inOrder(root);
console.log();

const i = new Interval(6, 7);
console.log("Searching for interval", i);
console.log("Overlaps with ", isOverlapping(root, i));
