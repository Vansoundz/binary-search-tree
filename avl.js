const Node = require("./bst.js")

class AVL extends Node {
  bf = 0
  constructor(d){
    super(d)
  }

  insert(data){
    // if(!this)return

    if(this.getBalanceFactor(this) === -2){
      console.log(this)
      this.balance(this)
    }

    if(data > this.data){
      if(this.right){
        return this.right.insert(data)
      }else this.right = this.createNode(data)
    }else{
      if(this.left){
        return this.left.insert(data)
      }else this.left = this.createNode(data)
    }

    // this.balance(this)
  }

  getBalanceFactor(root){
    let bf = (this.maxHeight(root.left) - this.maxHeight(root.right))
    return bf
  }

  rotateL(root){
    const temp = root.right
    temp.left = root
    root = temp
    return root
  }

  rotationLL(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp
  }

  rotationRR(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }

  balance(root){
    if(!root) return root
    let bf = this.getBalanceFactor(root)
    console.log(bf)
    if(bf === -2){
      root = this.rotateL(root)
      console.log(root)
    }
    if(bf === 2){
      root = this.rotationLL(root)
    }
    this.balance(root.left)
    this.balance(root.right)
    return root
  }
}

module.exports = AVL