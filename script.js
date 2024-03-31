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
