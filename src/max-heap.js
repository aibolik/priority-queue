const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null
		this.parentNodes = []
		this.sz = 0
	}

	push(data, priority) {
		let node = new Node(data, priority)
		this.insertNode(node)
		this.shiftNodeUp(node)
	}

	pop() {
		if (this.isEmpty()) {
			return
		}
		this.sz = this.sz - 1
		let detached = this.detachRoot()
		this.restoreRootFromLastInsertedNode(detached)
		this.shiftNodeDown(this.root)
		return detached.data
	}

	detachRoot() {
		for (let i = 0; i < this.parentNodes.length; i++) {
			if (this.parentNodes[i] === this.root) {
				this.parentNodes.splice(i, 1)
				break
			}
		}
		let detached = this.root
		this.root = null
		return detached

	}

	restoreRootFromLastInsertedNode(detached) {
		if (this.parentNodes.length < 1) {
			return
		}
		let lastInsertedNode = this.parentNodes.pop()

        this.root = lastInsertedNode

		this.root.left = detached.left
		this.root.right = detached.right

		if (this.root.left === lastInsertedNode) {
			this.root.left = null
		}

		if (this.root.right === lastInsertedNode) {
			this.root.right = null
		}

		if (this.root.parent && this.root.parent.left === lastInsertedNode) {
			this.root.parent.left = null

		}
        if (this.root.parent && this.root.parent.right === lastInsertedNode) {
            this.root.parent.right = null
        }

        if (!this.root.left || !this.root.right) {
            this.parentNodes.unshift(this.root)
        }

        if (this.root.parent && this.root.parent !== detached) {
			this.parentNodes.unshift(this.root.parent)
		}
		this.root.parent = detached.parent

		if (detached.left) {
            detached.left.parent = this.root
        }
        if (detached.right) {
            detached.right.parent = this.root
        }



	}

	size() {
		return this.sz
	}

	isEmpty() {
		return this.root === null
	}

	clear() {
		this.root = null
		this.parentNodes = []
		this.sz = 0
	}

	insertNode(node) {
        this.sz = this.sz + 1
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

			if (node1 !== node2 && node1 !== undefined && node2 !== undefined) {
				[this.parentNodes[node1], this.parentNodes[node2]] = [this.parentNodes[node2], this.parentNodes[node1]]
			} else if (node1 !== undefined) {
				this.parentNodes[node1] = node.parent
			}

			node.swapWithParent()
			if (node.parent === null) {
				this.root = node
			}
            this.shiftNodeUp(node)
		}
	}

	shiftNodeDown(node) {
		if (!node) {
			return
		}
		let maxNode
		let minNode
		if (!node.right || !node.left) {
			maxNode = node.right ? node.right : node.left
		} else {
			maxNode = node.left.priority > node.right.priority ? node.left : node.right
			minNode = node.left.priority <= node.right.priority ? node.left : node.right
		}
		if (!maxNode) {
			return
		}
		if (node.priority < maxNode.priority) {
            let node1
            let node2
            for (let i = 0; i < this.parentNodes.length; i++) {
                if (this.parentNodes[i] === maxNode) {
                    node1 = i
                }
                if (maxNode.parent !== null && this.parentNodes[i] === maxNode.parent) {
                    node2 = i
                }
            }

            if (node1 !== node2 && node1 !== undefined && node2 !== undefined) {
                [this.parentNodes[node1], this.parentNodes[node2]] = [this.parentNodes[node2], this.parentNodes[node1]]
            } else if (node1 !== undefined) {
                this.parentNodes[node1] = maxNode.parent
            }


			maxNode.swapWithParent()
			if (maxNode.parent === null) {
				this.root = maxNode
			}
			this.shiftNodeDown(node)
		}

	}
}

module.exports = MaxHeap;
