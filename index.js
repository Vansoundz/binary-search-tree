class Node {
  data;
  left;
  right;
  bf

  constructor(d){
    this.data = d
    this.left = null
    this.right = null
  }

  createNode(data){
    return new Node(data)
  }

  insert(data){
    if(data > this.data){
      if(this.right){
        return this.right.insert(data)
      }else this.right = this.createNode(data)
    }else{
      if(this.left){
        return this.left.insert(data)
      }else this.left = this.createNode(data)
    }
  }

  delete(root, data){
    if(!root) return root;
    if(data < root.data) root.left = this.delete(root.left, data)
    else if(data > root.data) root.right = this.delete(root.right, data)
    else{
      if(!root.left && !root.right){
        root = null
      }else if(!root.right){
        root = root.left
      }else if(!root.left){
        root = root.right
      }else {
        let min = this.minRec(root.right)
        root.data = min
        root.right = this.delete(root.right, min)
      }
    }
    return root
  }

  find (data) {
    if(this.data === data){
      return data
    }else{
      if(data > this.data){
        return this.right ? this.right.find(data) : -1
      }else{
        return this.left ? this.left.find(data) : -1
      }
    }
    return -1
  }

  min(){
    let left = this.left
    while(left.left){
      left = left.left
    }
    return left.data
  }

  max(){
    let right = this.right
    while(right.right){
      right = right.right
    }
    return right.data
  }

  minRec(root){
    if(root == null) return -1
    else if(root.left == null)
      return root.data
    else return this.minRec(root.left)
  }

  maxRec(root){
    if(root === null) return -1
    else if(root.right === null)
      return root.data
    else return this.maxRec(root.right)
  }

  maxHeight(root){
    if(root === null) return -1
    return (1 + Math.max(this.maxHeight(root.right), this.maxHeight(root.left)))
  }

  print(root){
    if(!root.left){
      return
    }else if(!root.right){
      return
    }else{
      console.log(root.left.data)
      console.log(root.right.data)
      this.print(root.left)
      this.print(root.right)
    }
  }

  static preOrderTrav(root){
    if(root === null){
      return
    }else {
      console.log(root.data)
      Node.preOrderTrav(root.left)
      Node.preOrderTrav(root.right)
    }
  }

  static levelTrav(root){
    if(!root) return 
    let que = [root]

    while(que.length){
      let current = que[0]
      console.log(current.data)
      if(current.left) que.push(current.left)
      if(current.right) que.push(current.right)
      que.shift()
    }
  }

  static postTrav(root){
    if(!root) return
    else{
      Node.postTrav(root.left)
      Node.postTrav(root.right)
      console.log(root.data)
    }
  }

  static inOrderTrav(root){
    if(!root) return
    else{
      Node.inOrderTrav(root.left)
      console.log(root.data)
      Node.inOrderTrav(root.right)
    }
  }

  iPreOrderTrav(){
    let root = this
    let stack = [root]

    while(stack.length > 0){
      let el = stack.pop()
      console.log(el.data)
      if(el.right) stack.push(el.right)
      if(el.left) stack.push(el.left)
    }
  }

  iPostOrderTrav(){
    let root = this
    let stack = [root]
    let st = []
    let i = 0

    while(stack.length){
      let el = stack.pop()
      st.push(el)
      if(el.left) stack.push(el.left)
      if(el.right) stack.push(el.right)
    }

    while(st.length){
      let el = st.pop()
      console.log(el.data)
    }
  }

  iInOrderTrav(){
    let root = this
    let stack = []
    let c = []

    while(root !== null || stack.length > 0){
      while(root !== null){
        stack.push(root)
        root = root.left
      }

      let el = stack.pop()
      console.log(el.data)
      root = el.right
    }
  }

  isBST(root,min = -100, max = 100){
      
    if(root === null)
      return true
    if(!root.right || !root.left)
      return true

    if(root.left && (root.left.data > root.data || root.left.data > max))
      return false
    else if(root.right && (root.right.data < root.data || root.right.data <= min))
      return false
    else {
      //  console.log(min, max)
      return (this.isBST(root.left, min, root.data) && this.isBST(root.right, root.data, max))}
  }

  checkBST(root){
    return this.isBST(root, -1000, 1000)
  }

}

let t = new Node(20)
let a = new Node(10)
a.left = new Node(5)
a.right = new Node(16)
a.left.left = new Node(4)
a.left.right = new Node(7)
a.left.left.right = new Node(6)
a.left.left.left = new Node(3)

t.insert(30)
t.insert(10)
t.insert(15)
t.insert(24)
t.insert(9)
t.insert(31)
t.insert(8)
t.insert(26)
t.insert(22)
t.insert(21)
t.insert(23)


// console.log(t.find(21))
// console.log(t.min())
// console.log(t.max())
// console.log(t.minRec(t))
// console.log(t.maxRec(t))
console.log(t.maxHeight(t))
// console.log(t)
// t.print(t)
// console.log("pre order")
// Node.preOrderTrav(t)
// console.log("level order")
// t.ltrav(t)
// console.log("post order")
// t.ttrav(t)
// console.log(a)
console.log("in order")
Node.inOrderTrav(t)
console.log("Delete")
t.delete(t, 20)
t.delete(t, 22)
console.log(t.data)
console.log("in order")
Node.inOrderTrav(t)
// console.log("iterative")
// t.iInOrderTrav()
// console.log("pre order")
// Node.preOrderTrav(t)
// console.log("iterative")
// t.iPreOrderTrav()
// console.log("post order")
// Node.postTrav(t)
// console.log("iterative")
// t.iPostOrderTrav()
// console.log("level order")
// Node.levelTrav(t)

// console.log(t.isBST(t))
// console.log(a.isBST(a))
console.log(t.maxHeight(t))
