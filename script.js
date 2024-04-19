// Project: Recursion

// Part 1: Fibonacci

function fibs(n) {
  if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  }
  let fibList = fibs(n - 1);
  fibList.push(fibList[n - 3] + fibList[n - 2]);
  return fibList;
}

console.log(fibs(18));

// Part 2: Merge Sort

function mergeSort(l) {
  let sorted = true;
  for (let i = 0; i < l.length - 1; i++) {
    if (l[i] > l[i + 1]) {
      sorted = false;
    }
  }
  if (sorted) {
    return l;
  }
  let len = l.length;
  if (len == 2) {
    if (l[0] > l[1]) {
      temp = l[0];
      l[0] = l[1];
      l[1] = temp;
    }
    return l;
  } else if (len == 1) {
    return l;
  }
  let firstHalf = l.slice(0, len / 2);
  let secondHalf = l.slice(len / 2, len);
  let sortedFirstHalf = mergeSort(firstHalf);
  let sortedSecondHalf = mergeSort(secondHalf);
  let ptr1 = 0;
  let ptr2 = 0;
  let sortedArray = [];
  while (ptr1 != sortedFirstHalf.length && ptr2 != sortedSecondHalf.length) {
    if (sortedSecondHalf[ptr2] <= sortedFirstHalf[ptr1]) {
      sortedArray.push(sortedSecondHalf[ptr2]);
      ptr2++;
    } else if (sortedFirstHalf[ptr1] <= sortedSecondHalf[ptr2]) {
      sortedArray.push(sortedFirstHalf[ptr1]);
      ptr1++;
    }
  }
  if (ptr1 == sortedFirstHalf.length) {
    sortedArray = sortedArray.concat(sortedSecondHalf.slice(ptr2));
  } else if (ptr2 == sortedSecondHalf.length) {
    sortedArray = sortedArray.concat(sortedFirstHalf.slice(ptr1));
  }
  return sortedArray;
}

l = [
  3, 2, 1, 13, 8, 5, 0, 1, 14, 9, 5, 2, 8, 6, 7, 14, 19, 28, 23, 17, 10, 7, 6,
  18, 11, 13,
];
console.log(mergeSort(l));

// Project: Linked Lists
function Node(val) {
  return {
    val,
    next: null,
  };
}

function LinkedList() {
  let list = null;
  let size = 0;
  const getSize = () => {
    return size;
  };
  const append = (node) => {
    if (list === null) {
      list = node;
      size++;
    } else {
      let ptr = list;
      while (ptr.next != null) {
        ptr = ptr.next;
      }
      ptr.next = node;
      size++;
    }
    return list;
  };
  const prepend = (node) => {
    if (list === null) {
      list = node;
      size++;
    } else {
      node.next = list;
      list = node;
      size++;
    }
    return list;
  };
  const getHead = () => {
    return list;
  };
  const getTail = () => {
    let ptr = list;
    if (ptr === null) {
      return null;
    }
    while (ptr.next != null) {
      ptr = ptr.next;
    }
    return ptr;
  };
  const at = (i) => {
    let ptr = list;
    let placesLeft = i;
    while (ptr != null && placesLeft > 0) {
      ptr = ptr.next;
      placesLeft--;
    }
    return ptr;
  };
  const toString = () => {
    // In the future, use inheritance here.
    let nums = [];
    let ptr = list;
    while (ptr != null) {
      nums.push(ptr.val);
      ptr = ptr.next;
    }
    let str = "";
    for (let i = 0; i < nums.length; i++) {
      str = str + "( " + nums[i] + " ) -> ";
    }
    str = str + "null";
    return str;
  };
  const pop = () => {
    let ptr = list;
    if (ptr === null || ptr.next === null) {
      return null;
    }
    while (ptr.next.next != null) {
      ptr = ptr.next;
    }
    ptr.next = null;
    return list;
  };
  const contains = (value) => {
    let ptr = list;
    while (ptr != null) {
      if (ptr.val === value) {
        return true;
      }
      ptr = ptr.next;
    }
    return false;
  };
  const find = (value) => {
    let ptr = list;
    let i = 0;
    while (ptr != null) {
      if (ptr.val === value) {
        return i;
      }
      ptr = ptr.next;
      i++;
    }
    return null;
  };
  const change = (oldVal, newVal) => {
    let ptr = list;
    while (ptr != null) {
      if (ptr.val === oldVal) {
        ptr.val = newVal;
        return list;
      }
      ptr = ptr.next;
    }
    return list;
  };
  const addKeyValPair = (key, value) => {
    // ONLY MUST BE USED FOR KEY-VAL PAIR LISTS ONLY
    if (
      !(list != null && list.val.constructor === Array && list.val.length === 2)
    ) {
      console.log(
        "This is not an key-val pair list. Function will not execute."
      );
      return list;
    }
    let ptr = list;
    while (ptr != null) {
      if (ptr.val[0] === key && ptr.val[1] != value) {
        ptr.val[1] = value;
        return list;
      } else if (ptr.val[0] === key && ptr.val[1] === value) {
        return list;
      } else if (ptr.next === null && ptr.val[0] != key) {
        ptr.next = Node([key, value]);
        size++;
        return list;
      }
      ptr = ptr.next;
    }
    return list;
  };
  const findKeyValPair = (key) => {
    // ONLY MUST BE USED FOR KEY-VAL PAIR LISTS ONLY
    if (
      !(list != null && list.val.constructor === Array && list.val.length === 2)
    ) {
      console.log(
        "This is not an key-val pair list. Function will not execute."
      );
      return list;
    }
    let ptr = list;
    while (ptr != null) {
      if (ptr.val[0] === key) {
        return ptr.val;
      }
      ptr = ptr.next;
    }
    return null;
  };
  const removeKeyValPair = (key) => {
    // ONLY MUST BE USED FOR KEY-VAL PAIR LISTS ONLY
    if (
      !(list != null && list.val.constructor === Array && list.val.length === 2)
    ) {
      console.log(
        "This is not an key-val pair list. Function will not execute."
      );
      return false;
    }
    let ptr = list;
    if (ptr.val[0] === key) {
      list = list.next;
      size--;
      return true;
    }
    while (ptr.next != null) {
      if (ptr.next.val[0] === key) {
        ptr.next = ptr.next.next;
        size--;
        return true;
      }
      ptr = ptr.next;
    }
    return false;
  };
  const items = () => {
    let items = [];
    let ptr = list;
    while (ptr != null) {
      items.push(ptr.val);
      ptr = ptr.next;
    }
    return items;
  };
  return {
    list,
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
    change,
    addKeyValPair,
    findKeyValPair,
    removeKeyValPair,
    items,
  };
}

// Test case:
let myList = LinkedList();
let myNode = Node(5);
console.log(myNode);
let myNode2 = Node(7);
let myNode3 = Node(9);
let myNode4 = Node(1);
let myNode5 = Node(2);
let myNode6 = Node(12);
let myNode7 = Node(10);
myList.append(myNode);
myList.append(myNode2);
myList.append(myNode3);
myList.append(myNode4);
myList.append(myNode5);
myList.prepend(myNode6);
myList.prepend(myNode7);
console.log(myList.getSize());
console.log(myList.getHead());
console.log(myList.getTail());
console.log(myList.at(3));
console.log(myList.at(5));
console.log(myList.at(0));
console.log(myList.at(6));
console.log(myList.at(7));
console.log(myList.at(7));
console.log(myList.toString());
console.log(myList.pop());
console.log(myList.contains(5));
console.log(myList.contains(6));
console.log(myList.contains(7));
console.log(myList.find(5));
console.log(myList.find(6));
console.log(myList.find(7));
console.log(myList.find(9));
console.log(myList.toString());

let myList2 = LinkedList();
myList2.append(Node(1));
myList2.append(Node(4));
myList2.append(Node(12));
myList2.append(Node(7));
myList2.append(Node(9));
myList2.append(Node(3));
myList2.prepend(Node(6));
myList2.prepend(Node(10));
myList2.prepend(Node(8));
myList2.pop();
myList2.pop();
console.log(myList2.find(10));
console.log(myList2.toString());
myList2.change(12, 7);
console.log(myList2.toString());

// Hash Map (lesson):

/*
function hash(name, surname) {
  return name.charAt(0) + surname.charAt(0);
}

console.log(hash("Carlos", "Smith"));

function stringToNumber(string) {
  let hashCode = 0;
  for (let i = 0; i < string.length; i++) {
    console.log(string.charCodeAt(i));
    hashCode += string.charCodeAt(i);
  }
  return hashCode;
}

function hashf(name, surname) {
  return stringToNumber(name) + stringToNumber(surname);
}

console.log(hashf("Carlos", "Smith"));
*/

// Project: HashMap

function hash(string) {
  let hashCode = 0;
  for (let i = 0; i < string.length; i++) {
    hashCode += string.charCodeAt(i);
  }
  return hashCode;
}

function HashMap() {
  map = [];
  const get = (key) => {
    hashCode = hash(key);
    if (hashCode < 0) {
      console.log("Accessing a negative index. Cannot add.");
      return;
    }
    if (map[hashCode] === undefined || map[hashCode] === null) {
      return null;
    }
    return map[hashCode].findKeyValPair(key);
  };
  const set = (key, value) => {
    hashCode = hash(key);
    if (hashCode < 0) {
      console.log("Accessing a negative index. Cannot add.");
      return;
    }
    if (map[hashCode] === undefined) {
      let list = LinkedList();
      list.append(Node([key, value]));
      map[hashCode] = list;
    } else {
      map[hashCode].addKeyValPair(key, value);
    }
    return map;
  };
  const has = (key) => {
    hashCode = hash(key);
    if (hashCode < 0) {
      console.log("Accessing a negative index. Cannot add.");
      return false;
    }
    if (map[hashCode] === undefined || map[hashCode] === null) {
      return false;
    }
    if (map[hashCode].findKeyValPair(key) != null) {
      return true;
    }
    return false;
  };
  const remove = (key) => {
    hashCode = hash(key);
    if (hashCode < 0) {
      console.log("Accessing a negative index. Cannot add.");
      return false;
    }
    if (map[hashCode] === undefined || map[hashCode] === null) {
      return false;
    }
    if (map[hashCode].removeKeyValPair(key) === true) {
      return true;
    }
    return false;
  };
  const length = () => {
    let size = 0;
    for (let i = 0; i < map.length; i++) {
      if (map[i] != undefined) {
        size += map[i].getSize();
      }
    }
    return size;
  };
  const keys = () => {
    let keys = [];
    for (let i = 0; i < map.length; i++) {
      if (map[i] != undefined) {
        for (let j = 0; j < map[i].items().length; j++) {
          keyValPair = map[i].items()[j];
          keys.push(keyValPair[0]);
        }
      }
    }
    return keys;
  };
  const values = () => {
    let vals = [];
    for (let i = 0; i < map.length; i++) {
      if (map[i] != undefined) {
        for (let j = 0; j < map[i].items().length; j++) {
          keyValPair = map[i].items()[j];
          vals.push(keyValPair[1]);
        }
      }
    }
    return vals;
  };
  const entries = () => {
    let keyVals = [];
    for (let i = 0; i < map.length; i++) {
      if (map[i] != undefined) {
        for (let j = 0; j < map[i].items().length; j++) {
          keyValPair = map[i].items()[j];
          keyVals.push(keyValPair);
        }
      }
    }
    return keyVals;
  };
  const clear = () => {
    map = [];
  };
  return {
    get,
    set,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}

const hm = new HashMap();
hm.set("Carlos", 4);
hm.set("rloCas", 4);
hm.set("Carlos", 4);
hm.set("emily", 15);
hm.set("ilyem", 18);
hm.set("meily", 22);
hm.set("miley", 22);
hm.set("john", 23);
hm.set("hojn", 18);
hm.set("Carlos", 5);
hm.set("njoh", 13);
hm.set("i love breakfast", 123);

console.log(hm.get("rloCas"));
console.log(hm.has("miley"));
console.log(hm.has("emily"));
console.log(hm.has("emile"));

console.log(hm.remove("john"));
console.log(hm.remove("john"));
console.log(hm.remove("john"));
console.log(hm.remove("miley"));
console.log(hm.set("miley", 5));

console.log(hm.length());

console.log(hm.length());

console.log(hm.keys());
console.log(hm.values());
console.log(hm.entries());
hm.clear();
console.log(hm.entries());

// Project: Binary Search Trees
function TreeNode(val) {
  return {
    left: null,
    val,
    right: null,
  };
}

function Tree(treeArr) {
  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "|   " : "   "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.val}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
  const buildTree = (arr) => {
    if (arr.length === 0) {
      return null;
    }
    if (arr.length === 1) {
      return TreeNode(arr[0]);
    }
    arr = mergeSort(arr);
    let root = TreeNode(arr[Math.floor(arr.length / 2)]);

    let lArr = arr.slice(0, arr.length / 2);
    let rArr = arr.slice(arr.length / 2 + 1, arr.length);

    root.left = buildTree(lArr);
    root.right = buildTree(rArr);
    return root;
  };
  const insert = (value) => {
    if (root === null) {
      root = TreeNode(value);
      return root;
    }
    let ptr = root;
    let inserted = false;
    while (!inserted) {
      if (ptr.val <= value && ptr.right != null) {
        ptr = ptr.right;
      } else if (ptr.left != null) {
        ptr = ptr.left;
      }
      if (ptr.left === null && ptr.val > value) {
        ptr.left = TreeNode(value);
        inserted = true;
      } else if (ptr.right === null && ptr.val <= value) {
        ptr.right = TreeNode(value);
        inserted = true;
      }
    }
    return root;
  };
  const deleteItem = (value) => {
    let ptr = root;
    // Check if the tree is null, or there's one node that contains your value.
    if (
      ptr === null ||
      (ptr.left === null && ptr.right === null && ptr.val === value)
    ) {
      root = null;
      return root;
    }
    // Keep looping until you hit null, meaning your value was never found.
    while (!(ptr.left === null && ptr.right === null)) {
      if (
        ptr.left != null &&
        ptr.left.left === null &&
        ptr.left.right === null &&
        ptr.left.val === value
      ) {
        ptr.left = null;
        return root;
      } else if (
        ptr.right != null &&
        ptr.right.left === null &&
        ptr.right.right === null &&
        ptr.right.val === value
      ) {
        ptr.right = null;
        return root;
      }
      // Go to the node that has the value, and do the appropriate swapping.
      if (ptr.val < value) {
        ptr = ptr.right;
      } else if (ptr.val > value) {
        ptr = ptr.left;
      } else {
        //console.log("value found");
        let ptrToRemove = ptr;
        let ptrToSwapWith = null;
        let leafNodeParent = null; // only used when ptr ends up at a leaf node, we need to know its parent!
        if (ptr.right != null) {
          if (ptr.right.left === null && ptr.right.right === null) {
            leafNodeParent = ptr;
          }
          ptr = ptr.right;
          while (ptr.left != null) {
            if (ptr.left.left === null && ptr.left.right === null) {
              leafNodeParent = ptr;
            }
            ptr = ptr.left;
          }
        } else if (ptr.left != null) {
          if (ptr.left.left === null && ptr.left.right === null) {
            leafNodeParent = ptr;
          }
          ptr = ptr.left;
          while (ptr.right != null) {
            if (ptr.right.left === null && ptr.right.right === null) {
              leafNodeParent = ptr;
            }
            ptr = ptr.right;
          }
        }
        ptrToSwapWith = ptr;
        //console.log("ptrToRemove:", ptrToRemove);
        //console.log("ptrToSwapWith:", ptrToSwapWith);
        let tempVal = ptrToRemove.val;
        ptrToRemove.val = ptrToSwapWith.val;
        ptrToSwapWith.val = tempVal;
        ptrToRemove = ptrToSwapWith;

        // Did the ptrToSwapWith end up as a leaf node?
        if (leafNodeParent != null) {
          if (leafNodeParent.left === ptrToSwapWith) {
            leafNodeParent.left = null;
          } else if (leafNodeParent.right === ptrToSwapWith) {
            leafNodeParent.right = null;
          }
          return root;
        }

        // Did the ptrToSwapWith not end up as a leaf node? Sink the node until it's a leaf node, and remove it.
        while (!(ptrToRemove.left === null && ptrToRemove.right === null)) {
          if (ptrToRemove.left != null && ptrToRemove.right === null) {
            ptrToSwapWith = ptrToRemove.left;
          } else if (ptrToRemove.right != null && ptrToRemove.left === null) {
            ptrToSwapWith = ptrToRemove.right;
          } else if (ptrToRemove.left != null && ptrToRemove.right != null) {
            ptrToSwapWith = ptrToRemove.left;
          }
          tempVal = ptrToRemove.val;
          ptrToRemove.val = ptrToSwapWith.val;
          ptrToSwapWith.val = tempVal;
          let tempPtr = ptrToRemove;
          ptrToRemove = ptrToSwapWith;
          ptrToSwapWith = tempPtr;
        }
        if (ptrToSwapWith.left === ptrToRemove) {
          ptrToSwapWith.left = null;
        } else if (ptrToSwapWith.right === ptrToRemove) {
          ptrToSwapWith.right = null;
        }
        return root;
      }
    }
    return root;
  };
  const find = (value) => {
    if (root === null) {
      return null;
    }
    let ptr = root;
    while (ptr != null) {
      if (ptr.val < value) {
        ptr = ptr.right;
      } else if (ptr.val > value) {
        ptr = ptr.left;
      } else if (ptr.val === value) {
        return ptr;
      }
    }
    return null;
  };
  const levelOrder = (callback) => {
    let queue = [];
    let order = [];
    queue.push(root);
    while (queue.length != 0) {
      let node = queue.shift();
      order.push(node.val);
      if (node.left != null) {
        queue.push(node.left);
      }
      if (node.right != null) {
        queue.push(node.right);
      }
    }
    return order;
  };
  const preOrder = (callback) => {
    let stack = [];
    let order = [];
    stack.push(root);
    while (stack.length != 0) {
      let node = stack.pop();
      order.push(node.val);
      if (node.right != null) {
        stack.push(node.right);
      }
      if (node.left != null) {
        stack.push(node.left);
      }
    }
    return order;
  };
  const inOrder = (callback) => {
    let stack = [];
    let order = [];
    stack.push(root);
    let node = stack[stack.length - 1];
    node = node.left;
    while (stack.length != 0) {
      if (node != null) {
        stack.push(node);
        node = node.left;
      } else {
        node = stack.pop();
        order.push(node.val);
        node = node.right;
        if (node != null) {
          stack.push(node);
          node = node.left;
        }
      }
    }
    return order;
  };

  const postOrder = (callback) => {
    // Using 2 stacks is a much better approach!
    let stack1 = [];
    let stack2 = [];
    let order = [];
    stack1.push(root);
    while (stack1.length != 0) {
      transferNode = stack1.pop();
      stack2.push(transferNode);
      if (transferNode.left != null) {
        stack1.push(transferNode.left);
      }
      if (transferNode.right != null) {
        stack1.push(transferNode.right);
      }
    }
    while (stack2.length != 0) {
      order.push(stack2.pop().val);
    }
    return order;
  };

  const height = (node) => {
    if (node === null) {
      return -1;
    }
    let queue = [];
    let heightQueue = [];
    queue.push(node);
    heightQueue.push(0);
    let maxHeight = 0;
    while (queue.length != 0) {
      let dequeuedNode = queue.shift();
      let height = heightQueue.shift();
      if (height > maxHeight) {
        maxHeight = height;
      }
      if (dequeuedNode.left != null) {
        queue.push(dequeuedNode.left);
        heightQueue.push(height + 1);
      }
      if (dequeuedNode.right != null) {
        queue.push(dequeuedNode.right);
        heightQueue.push(height + 1);
      }
    }
    return maxHeight;
  };

  const depth = (node) => {
    let queue = [];
    let depthQueue = [];
    queue.push(root);
    depthQueue.push(0);
    while (queue.length != 0) {
      let dequeuedNode = queue.shift();
      console.log(dequeuedNode);
      let depth = depthQueue.shift();
      if (dequeuedNode === node) {
        return depth;
      }
      if (dequeuedNode.left != null) {
        queue.push(dequeuedNode.left);
        depthQueue.push(depth + 1);
      }
      if (dequeuedNode.right != null) {
        queue.push(dequeuedNode.right);
        depthQueue.push(depth + 1);
      }
    }
    return null;
  };

  const isBalanced = () => {
    if (root === null) {
      return true;
    } else if (root.left === null && root.right === null) {
      return true;
    }
    let queue = [];
    queue.push(root);
    while (queue.length != 0) {
      let dequeuedNode = queue.shift();
      let heightDiff = Math.abs(
        height(dequeuedNode.left) - height(dequeuedNode.right)
      );
      if (heightDiff > 1) {
        return false;
      }
      if (dequeuedNode.left != null) {
        queue.push(dequeuedNode.left);
      }
      if (dequeuedNode.right != null) {
        queue.push(dequeuedNode.right);
      }
    }
    return true;
  };

  const rebalance = () => {
    let newTreeArr = inOrder();
    console.log(newTreeArr);
    root = buildTree(newTreeArr);
    return root;
  };
  let root = buildTree(treeArr);
  return {
    get root() {
      return root;
    },
    prettyPrint,
    insert,
    deleteItem,
    find,
    levelOrder,
    preOrder,
    inOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    rebalance,
  };
}

let myTree2 = Tree([1, 2]);
console.log(myTree2.deleteItem(2));

let myTree3 = Tree([1, 2, 3]);
console.log(myTree3.deleteItem(2));

let myTree4 = Tree([1, 7, 4, 23, 8]);
myTree4.prettyPrint(myTree4.root);
myTree4.deleteItem(4);
myTree4.prettyPrint(myTree4.root);
myTree4.deleteItem(7);
myTree4.prettyPrint(myTree4.root);

let myTree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(myTree.root);
myTree.prettyPrint(myTree.root);
myTree.insert(5);
myTree.insert(9133);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(4);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(4);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(5);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(5);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(9);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(7);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(9);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(7);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(8);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(67);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(3);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(324);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(6345);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(9133);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(23);
myTree.prettyPrint(myTree.root);
myTree.deleteItem(1);
console.log(myTree.root);
myTree.prettyPrint(myTree.root);
myTree.insert(5);
myTree.prettyPrint(myTree.root);
myTree.insert(11);
myTree.prettyPrint(myTree.root);
console.log(myTree.find(11));
console.log(myTree.find(5));
console.log(myTree.find(6));
myTree.levelOrder(myTree.deleteItem(5));

let myTree5 = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(myTree5.levelOrder());
console.log(myTree5.levelOrder(myTree5.deleteItem(1)));
console.log(myTree5.preOrder()); // root, left, right
console.log("inorder:", myTree5.inOrder()); // left, root, right
console.log(myTree5.postOrder()); // left, right, root
myTree5.insert(3);
myTree5.insert(2);
myTree5.prettyPrint(myTree5.root);
myTree5.insert(1);
myTree5.insert(0);
myTree5.prettyPrint(myTree5.root);
console.log(myTree5.height(myTree5.find(5)));
console.log(myTree5.height(myTree5.find(2)));
console.log(myTree5.height(myTree5.find(3)));
console.log(myTree5.height(myTree5.find(8)));
console.log(myTree5.depth(myTree5.find(5)));
console.log(myTree5.depth(myTree5.find(2)));
console.log(myTree5.depth(myTree5.find(3)));
console.log(myTree5.depth(myTree5.find(8)));
console.log(myTree5.isBalanced());
myTree5.rebalance();
console.log(myTree5.isBalanced());
myTree5.prettyPrint(myTree5.root);

let myTree6 = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(myTree6.isBalanced());

let myTree7 = Tree([1, 7, 4, 23, 8]);
console.log(myTree7.isBalanced());
myTree7.insert(0);
console.log(myTree7.isBalanced());
myTree7.rebalance();
console.log(myTree7.isBalanced());

// Project: Knights Travails

let boardRows = 8;
let boardCols = 8;
let visited = (n) => {
  let a = [];
  for (let i = 0; i < n; i++) {
    a[i] = [];
    for (let j = 0; j < n; j++) {
      a[i][j] = false;
    }
  }
  return a;
};
let moves = (n) => {
  let a = [];
  for (let i = 0; i < n; i++) {
    a[i] = [];
    for (let j = 0; j < n; j++) {
      a[i][j] = 0;
    }
  }
  return a;
};
let previousPosition = (n) => {
  let a = [];
  for (let i = 0; i < n; i++) {
    a[i] = [];
    for (let j = 0; j < n; j++) {
      a[i][j] = [];
    }
  }
  return a;
};

function knightMoves(start, end) {
  if (
    !(
      start.constructor === Array &&
      start.length === 2 &&
      end.constructor === Array &&
      end.length === 2
    )
  ) {
    console.log("Two lists of length 2 were not passed. Exiting.");
    return null;
  }
  let visitedArray = visited(8);
  let movesArray = moves(8);
  let previousPositionsArray = previousPosition(8);
  let queue = [];
  let movesQueue = [];
  let previousMovesQueue = [];
  queue.push([start[0], start[1]]);
  movesQueue.push(0);

  while (queue.length != 0) {
    let position = queue.shift();
    let previousMove = null;
    if (previousMovesQueue.length != 0) {
      previousMove = previousMovesQueue.shift();
    }

    let moves = movesQueue.shift();
    let x = position[0];
    let y = position[1];
    // If it's already visited, skip this position.
    if (visitedArray[x][y] === true) {
      continue;
    }

    let newX1 = x + 2;
    let newY1 = y + 1;
    let newY2 = y - 1;
    let newX2 = x - 2;
    let newY3 = y + 2;
    let newX3 = x + 1;
    let newX4 = x - 1;
    let newY4 = y - 2;

    if (newX1 >= 0 && newX1 < 8 && newY1 >= 0 && newY1 < 8) {
      // 1st case:
      queue.push([newX1, newY1]);
      previousMovesQueue.push([x, y]);
      movesQueue.push(moves + 1);
    }
    if (newX1 >= 0 && newX1 < 8 && newY2 >= 0 && newY2 < 8) {
      // 2nd case:
      queue.push([newX1, newY2]);
      previousMovesQueue.push([x, y]);
      movesQueue.push(moves + 1);
    }
    if (newX2 >= 0 && newX2 < 8 && newY1 >= 0 && newY1 < 8) {
      // 3rd case:
      queue.push([newX2, newY1]);
      previousMovesQueue.push([x, y]);
      movesQueue.push(moves + 1);
    }
    if (newX2 >= 0 && newX2 < 8 && newY2 >= 0 && newY2 < 8) {
      // 4th case:
      queue.push([newX2, newY2]);
      previousMovesQueue.push([x, y]);
      movesQueue.push(moves + 1);
    }
    if (newY3 >= 0 && newY3 < 8 && newX3 >= 0 && newX3 < 8) {
      // 5th case:
      queue.push([newX3, newY3]);
      previousMovesQueue.push([x, y]);
      movesQueue.push(moves + 1);
    }
    if (newY3 >= 0 && newY3 < 8 && newX4 >= 0 && newX4 < 8) {
      // 6th case:
      queue.push([newX4, newY3]);
      previousMovesQueue.push([x, y]);
      movesQueue.push(moves + 1);
    }
    if (newY4 >= 0 && newY4 < 8 && newX3 >= 0 && newX3 < 8) {
      // 7th case:
      queue.push([newX3, newY4]);
      previousMovesQueue.push([x, y]);
      movesQueue.push(moves + 1);
    }
    if (newY4 >= 0 && newY4 < 8 && newX4 >= 0 && newX4 < 8) {
      // 8th case:
      queue.push([newX4, newY4]);
      previousMovesQueue.push([x, y]);
      movesQueue.push(moves + 1);
    }
    visitedArray[x][y] = true;
    if (movesArray[x][y] === 0 || moves < movesArray[x][y]) {
      movesArray[x][y] = moves;
      if (previousMove != null) {
        previousPositionsArray[x][y] = previousMove;
      }
    }
  }

  // Retrieving the path using the previous positions array:
  let path = [];
  path.unshift(end);
  let previousPlace = previousPositionsArray[end[0]][end[1]];
  while (previousPlace.length != 0) {
    path.unshift(previousPlace);
    previousPlace = previousPositionsArray[previousPlace[0]][previousPlace[1]];
  }

  console.log("You made it in", path.length - 1, "moves! Here's your path:");
  return path;
}

console.log(knightMoves([3, 3], [4, 3]));
