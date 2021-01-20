class Node {
  data;
  left;
  right;

  constructor(d){
    this.data = d
    this.left = null
    this.right = null
  }

  createNode(data){
    return new Node(data)
  }

  insertLoop(data){
    let root = this

    let node = this.createNode(data)
    if(!root.data){
      root = node
    }else{
      let current = root
      let parent
      while(true){
        parent = current

        if(data < root.data){
          current = current.left

          if(!current){
            parent.left = node
            break
          }
        }else{
          current = current.right

          if(!current){
            parent.right = node
            break
          }
        }
      }
    }
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
    if(!root) return -1
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

  levelTrav(root){
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

module.exports = Node
