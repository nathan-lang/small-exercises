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
