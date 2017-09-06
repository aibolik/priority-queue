const MaxHeap = require('./src/max-heap');
// const Node = require('./src/node')

const h = new MaxHeap();
//
// let h = new MaxHeap();
//
// h.root = new Node(0, 10);
// h.root.appendChild(new Node(1, 5));
// h.root.appendChild(new Node(2, 7));
// h.root.left.appendChild(new Node(3, 20));
//
// h.parentNodes = [
//     h.root.left,
//     h.root.right,
//     h.root.left.left,
// ];
//
// const newRoot = h.root.left.left;
// h.shiftNodeUp(h.root.left.left);

window.h = h;
