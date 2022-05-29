class Node {
  /**
   * @param {Any} data
   * @param {Node|null} next
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

module.exports = class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @description data is added to the front of the list
   * @param data
   */
  insertFirst(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  /**
   * @description data is added to the end of the list
   * @param data
   */
  insertLast(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  /**
   * @description data is inserted at the given index
   * @param data
   * @param index
   */
  insert(data, index) {
    const node = new Node(data);
    let currentIdx = 0;
    let currentNode = this.head;

    while (currentNode.next !== null && currentIdx !== index - 1) {
      currentNode = currentNode.next;
      currentIdx++;
    }

    if (currentIdx === index - 1) {
      node.next = currentNode.next;
      currentNode.next = node;
    } else {
      console.warn('Index out of range');
      process.exit(0);
    }
  }

  /**
   * @description data is removed from the front of the list
   */
  removeFirst() {
    if (!this.head) {
      console.warn('List is empty');
      process.exit(0);
    } else {
      this.head = this.head.next;
    }
  }

  /**
   * @description data is removed from the end of the list
   */
  removeLast() {
    if (!this.head) {
      console.warn('List is empty');
      process.exit(0);
    } else {
      let currentNode = this.head;
      let previousNode = this.head;

      while (currentNode.next !== null) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = previousNode;
      this.tail.next = null;
    }
  }

  /**
   * @description data is removed from the given index
   * @param index
   */
  remove(index) {
    let currentIdx = 0;
    let currentNode = this.head;

    while (currentNode.next !== null && currentIdx !== index - 1) {
      currentNode = currentNode.next;
      currentIdx++;
    }

    if (currentIdx === index - 1) {
      currentNode.next = currentNode.next.next;
    } else {
      console.warn('Index out of range');
      process.exit(0);
    }
  }

  /**
   * @description searches for the given data and returns the index, if not found returns -1
   * @param data
   * @returns index
   */
  search(data) {
    let currentNode = this.head;
    let currentIdx = 0;

    while (currentNode.next !== null) {
      if (currentNode.data === data) {
        return currentIdx;
      }
      currentIdx++;
      currentNode = currentNode.next;
    }
    return -1;
  }

  /**
   * @description prints the data of the linked list
   */
  printList() {
    let currentNode = this.head;
    let idx = 0;

    while (currentNode !== null) {
      if (idx === 0) {
        console.log(`[`);
        console.log(`  ${currentNode.data} ---> ${currentNode.next?.data || 'null'} ,`);
      } else if (currentNode.next === null) {
        console.log(`  ${currentNode.data} ---> ${currentNode.next?.data || 'null'} ,`);
        console.log(`]`);
      } else {
        console.log(`  ${currentNode.data} ---> ${currentNode.next?.data || 'null'} ,`);
      }
      currentNode = currentNode.next;
      idx++;
    }
  }
}
