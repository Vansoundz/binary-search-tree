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

  ptrav(root){
    if(root === null){
      return
    }else {
      console.log(root.data)
      this.ptrav(root.left)
      this.ptrav(root.right)
    }
  }

  ltrav(root){
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

  ttrav(root){
    if(!root) return
    else{
      this.ttrav(root.left)
      this.ttrav(root.right)
      console.log(root.data)
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

  altBST(root, min = -1000, max = 1000){
    if(root === null) return true
    if(!root.right || !root.left)
      return true
    if(root.data <= max && root.data > min &&
    this.altBST(root.left, min, root.data) && !this.altBST(root.right, root.data, max)
    ) return true
    return false
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
t.insert(10)
t.insert(26)
t.insert(22)
t.insert(21)
t.insert(23)


// console.log(t.find(21))
// console.log(t.min())
// console.log(t.max())
// console.log(t.minRec(t))
// console.log(t.maxRec(t))
// console.log(t.maxHeight(t))
// console.log(t)
// t.print(t)
// console.log("Pre order")
// t.ptrav(t)
// console.log("level order")
// t.ltrav(t)
// console.log("post order")
// t.ttrav(t)
// console.log(a)
console.log(t.isBST(t))
console.log(a.isBST(a))