class Node {
	constructor(data, priority) {
		this.data = data
		this.priority = priority

        this.parent = null
        this.left = null
        this.right = null
	}

	appendChild(node) {
        if (this.left === null) {
            node.parent = this
            this.left = node
        } else if (this.right === null) {
            if (!this.right) {
                node.parent = this
                this.right = node
            }
        }
	}

	removeChild(node) {
        if (this.left === node) {
            node.parent = null
            this.left = null
        } else if (this.right === node) {
            node.parent = null
            this.right = null
        } else {
            throw new Error('Given node is not child of current node')
        }
	}

	remove() {
	    if (this.parent !== null) {
            this.parent.removeChild(this)
        }
	}

	swapWithParent() {
	    if (this.parent === null) {
	        return
        }

        let parentOfParent = this.parent.parent
        let parent = this.parent
        let left = parent.left
        let right = parent.right

        if (this === left) {
            parent.parent = left
            left.parent = parentOfParent

            parent.left = left.left

            left.right = parent.right

            parent.right = left.right

            left.left = parent

            if (right !== null) {
                right.parent = left
            }

            if (parentOfParent!== null && parentOfParent.left !== null && parentOfParent.left === parent) {
                parentOfParent.left = left
            } else if (parentOfParent!== null && parentOfParent.right !== null && parentOfParent.right === parent) {
                parentOfParent.right = left
            }
        } else if (this === right) {
            parent.parent = right
            right.parent = parentOfParent

            parent.left = right.left

            right.left = parent.left

            parent.right = right.right

            right.right = parent

            if (left !== null) {
                left.parent = right
            }

            if (parentOfParent!== null && parentOfParent.left !== null && parentOfParent.left === parent) {
                parentOfParent.left = right
            } else if (parentOfParent!== null && parentOfParent.right !== null && parentOfParent.right === parent) {
                parentOfParent.right = right
            }
        }
	}
}

module.exports = Node;
