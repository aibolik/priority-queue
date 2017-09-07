const MaxHeap = require('./src/max-heap');
const Node = require('./src/node')
const Queue = require('./src/queue')

let h = new MaxHeap();

h.push(42, 15);
h.push(14, 32);
h.push(0, 0);

const detached = h.detachRoot();
h.restoreRootFromLastInsertedNode(detached);


// const q = new Queue()
//
// const nodes = [
//     {priority: 10, data: 1},
//     {priority: 20, data: 2},
//     {priority: 5, data: 3},
//     {priority: 0, data: 4},
//     {priority: 8, data: 5},
//     {priority: 12, data: 6},
//     {priority: 17, data: 7},
//     {priority: 15, data: 8},
// ];
//
// const expectedData = [2, 7, 8, 6, 1, 5, 3, 4]

// q.push(nodes[0].data, nodes[0].priority)
// q.push(nodes[1].data, nodes[1].priority)
// q.push(nodes[2].data, nodes[2].priority)
// q.push(nodes[3].data, nodes[3].priority)
// q.push(nodes[4].data, nodes[4].priority)
// q.push(nodes[5].data, nodes[5].priority)
// q.push(nodes[6].data, nodes[6].priority)
// q.push(nodes[7].data, nodes[7].priority)

// nodes.forEach(node => q.push(node.data, node.priority));
//
// console.log(q.shift())
// console.log(q.shift())
// console.log(q.shift())
// console.log(q.shift())
// console.log(q.shift())
// console.log(q.shift())
// console.log(q.shift())
// console.log(q.shift())

// console.log(q.size())
// expectedData.forEach(d => expect(q.shift()).to.equal(d));