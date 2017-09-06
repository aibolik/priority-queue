const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null
		this.parentNodes = []
		this.size = 0
	}

	push(data, priority) {
		let node = new Node(data, priority)
		this.insertNode(node)
		this.shiftNodeUp(node)
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		return this.root === null
	}

	clear() {
		this.root = null
		this.parentNodes = []
	}

	insertNode(node) {
		if (this.isEmpty()) {
			this.root = node
			this.parentNodes.push(node)
			return
		}
		for (let i = 0; i < this.parentNodes.length; i++) {
			if (!this.parentNodes[i].left || !this.parentNodes[i].right) {
				this.parentNodes[i].appendChild(node)
				if (this.parentNodes[i].left && this.parentNodes[i].right) {
					this.parentNodes.splice(i, 1)
					i--
				}
				this.parentNodes.push(node)
				break
			}
		}
		this.size = this.size + 1
	}

	shiftNodeUp(node) {
		if (node.parent !== null && node.parent.priority < node.priority) {
			let node1
			let node2
			for (let i = 0; i < this.parentNodes.length; i++) {
				if (this.parentNodes[i] === node) {
					node1 = i
				}
				if (node.parent !== null && this.parentNodes[i] === node.parent) {
					node2 = i
				}
			}

			if (node1 !== node2 && node1 && node2) {
				[this.parentNodes[node1], this.parentNodes[node2]] = [this.parentNodes[node2], this.parentNodes[node1]]
			}

			node.swapWithParent()
			if (node.parent === null) {
				this.root = node
			}
            this.shiftNodeUp(node)
		}
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
