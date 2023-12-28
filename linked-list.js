/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    let current = this.head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next;
    }

    if (previous) {
      previous.next = null;
      this.tail = previous;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return current.val;
  }


  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead.val;


  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    return current.val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index");
    }

    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      let current = this.head;
      let previous = null;
      for (let i = 0; i < idx; i++) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      previous.next = newNode;
      this.length++;
    }

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      let current = this.head;
      let previous = null;
      for (let i = 0; i < idx; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      this.length--;
      return current.val;
    }

  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    let current = this.head;
    let sum = 0;

    while (current) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }
  }

   class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
  
    unshift(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.length++;
    }
  
    pop() {
      if (!this.head) {
        throw new Error("List is empty");
      }
  
      const removed = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.length--;
      return removed.val;
    }
  
    shift() {
      if (!this.head) {
        throw new Error("List is empty");
      }
  
      const removed = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.length--;
      return removed.val;
    }
  
    getAt(idx) {
      if (idx < 0 || idx >= this.length) {
        throw new Error("Invalid index");
      }
  
      let current;
      if (idx < this.length / 2) {
        current = this.head;
        for (let i = 0; i < idx; i++) {
          current = current.next;
        }
      } else {
        current = this.tail;
        for (let i = this.length - 1; i > idx; i--) {
          current = current.prev;
        }
      }
  
      return current.val;
    }
  
    setAt(idx, val) {
      if (idx < 0 || idx >= this.length) {
        throw new Error("Invalid index");
      }
  
      const current = this.getAt(idx);
      current.val = val;
    }
  
    insertAt(idx, val) {
      if (idx < 0 || idx > this.length) {
        throw new Error("Invalid index");
      }
  
      if (idx === 0) {
        this.unshift(val);
      } else if (idx === this.length) {
        this.push(val);
      } else {
        const newNode = new Node(val);
        const current = this.getAt(idx);
        const prevNode = current.prev;
        newNode.next = current;
        newNode.prev = prevNode;
        current.prev = newNode;
        prevNode.next = newNode;
        this.length++;
      }
    }
  
    removeAt(idx) {
      if (idx < 0 || idx >= this.length) {
        throw new Error("Invalid index");
      }
  
      if (idx === 0) {
        return this.shift();
      } else if (idx === this.length - 1) {
        return this.pop();
      } else {
        const current = this.getAt(idx);
        const prevNode = current.prev;
        const nextNode = current.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.length--;
        return current.val;
      }
    }
  
    average() {
      if (!this.head) {
        throw new Error("List is empty");
      }
  
      let current = this.head;
      let sum = 0;
  
      while (current) {
        sum += current.val;
        current = current.next;
      }
  
      return sum / this.length;
    }
  }
  


module.exports = {LinkedList, DoublyLinkedList};
