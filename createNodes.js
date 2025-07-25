class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const removed = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removed;
    }

    let temp = this.head;

    while (temp.next !== this.tail) {
      temp = temp.next;
    }

    temp.next = null;
    this.tail = temp;
    this.length--;

    return removed;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.head = this.head.next;
    }
    removed.next = null;
    this.length--;

    return removed;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let currentEl = this.head;
    for (let i = 0; i < index; i++) {
      currentEl = currentEl.next;
    }

    return currentEl;
  }

  set(index, value) {
    const currentEl = this.get(index);
    if (currentEl) {
      currentEl.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    let preTargetEl = this.get(index - 1);

    newNode.next = preTargetEl.next;
    preTargetEl.next = newNode;
    this.length++;

    return true;
  }

  delete(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    let preTargetEl = this.get(index - 1);
    let removed = preTargetEl.next;
    preTargetEl.next = removed.next;
    removed.next = null;
    this.length--;
    return removed;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }

  findMiddleNode() {
    let fast = this.head;
    let slow = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  hasLoop() {
    let fast = this.head;
    let slow = this.head;
    let hasLoop;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        hasLoop = true;
        break;
      }
    }

    return hasLoop || false;
  }

  findKNthFromEnd(value) {
    let fast = this.head;
    let slow = this.head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);

console.log(myLinkedList.hasLoop());
// console.log(myLinkedList.delete(2));
// console.log(myLinkedList.reverse());
// console.log(myLinkedList.insert(1, 1));
// console.log(myLinkedList.delete(1));
// console.log(myLinkedList);

// console.log(myLinkedList.pop());
// console.log(myLinkedList.unshift(2));

// console.log(myLinkedList);
// console.log(myLinkedList.get(1));

// console.log(myLinkedList.set(1, 555));

// console.log(myLinkedList.push(7));
// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());

// console.log(myLinkedList.push(5));
