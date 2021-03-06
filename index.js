const Node = require('./bst.js');
const AVL = require('./avl.js');

let t = new AVL(20);
let u = new AVL(10);
let a = new Node(10);
a.left = new Node(5);
a.right = new Node(16);
a.left.left = new Node(4);
a.left.right = new Node(7);
a.left.left.right = new Node(6);
a.left.left.left = new Node(3);

t.insertLoop(30);
t.insertLoop(10);
t.insertLoop(15);
t.insertLoop(24);
t.insert(9);
t.insert(31);
t.insert(8);
t.insert(26);
t.insert(22);
t.insert(21);
t.insert(23);

t.iInOrderTrav(t);

t.delete(t, 9);

t.iInOrderTrav(t);

// u.insert(12)
// u.insert(8)
// u.insert(1)
// u.insert(14)
// u.insert(15)
// u.insert(16)
// u.insert(17)
// u.insert(9)

// console.log(t.find(21))
// console.log(t.min())
// console.log(t.max())
// console.log(t.minRec(t))
// console.log(t.maxRec(t))
// console.log(u.getBalanceFactor(u))
// u.levelTrav(u)
// console.log("balance")
// u.balance(u)
// console.log(u.getBalanceFactor(u))
// u.levelTrav(u)
// console.log(t)
// t.print(t)
// console.log("pre order")
// Node.preOrderTrav(t)
// console.log("level order")
// t.ltrav(t)
// console.log("post order")
// t.ttrav(t)
// console.log(a)
// console.log("in order")
// Node.inOrderTrav(t)
// console.log("Delete")
// t.delete(t, 20)
// t.delete(t, 22)
// console.log(t.data)
// console.log("in order")
// Node.inOrderTrav(t)
// console.log("up(t)
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
// console.log(t.maxHeight(t))
