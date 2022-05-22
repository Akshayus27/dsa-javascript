class Node {
  /**
   * @param {Any} data
   * @param {Node|null} previous
   * @param {Node|null} next
   */
  constructor(data, previous = null, next = null) {
    this.data = data;
  }
}

module.exports = class CircularLinkedList {
  head = Node | null;
  tail = Node | null;

  constructor() {}

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
      node.previous = this.tail;
      this.tail.next = node;

      this.head.previous = node;
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
      node.next = this.tail.next;
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.head.previous = node;
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
      const nextNode = currentNode.next;

      currentNode.next = node;
      node.previous = currentNode;

      nextNode.previous = node;
      node.next = nextNode;
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
      this.head.previous = this.tail;
      this.tail.next = this.head;
    }
  }

  /**
   * @description data is removed from the end of the list
   */
  removeLast() {
    if (!this.head) {
      console.warn('List is empty');
      process.exit(0);
    }
    const previousNode = this.tail.previous;
    this.tail = previousNode;
    this.tail.next = this.head;
  }

  /**
   * @description data is removed from the given index
   * @param index
   */
  remove(index) {
    let currentIdx = 0;
    let currentNode = this.head;

    while (currentNode.next !== null && currentIdx !== index) {
      currentNode = currentNode.next;
      currentIdx++;
    }

    if (currentIdx === index) {
      if (currentNode.next === this.head) {
        this.tail = currentNode.previous;
        this.tail.previous = currentNode.previous.previous;
        this.tail.next = this.head;
        this.head.previous = this.tail;
      } else {
        currentNode.previous.next = currentNode.next;
        currentNode.next.previous = currentNode.previous;
      }
    } else {
      console.warn('Index out of range');
      process.exit(0);
    }
  }

  /**
   * @description prints the data of the linked list
   */
  printList() {
    let currentNode = this.head;
    let idx = 0;

    while (true) {
      if (idx === 0) {
        console.log(`[`);
        console.log(`
          ${currentNode.data} ---> ${currentNode.next.data}
          ${currentNode.data} <--- ${currentNode.previous.data} ,
          `);
      } else if (currentNode.next === this.head) {
        console.log(`
          ${currentNode.data} ---> ${currentNode.next.data}
          ${currentNode.data} <--- ${currentNode.previous.data} ,
          `);
        console.log(`]`);
      } else {
        console.log(`
        ${currentNode.data} ---> ${currentNode.next.data}
        ${currentNode.data} <--- ${currentNode.previous.data} ,
        `);
      }

      if (currentNode.next === this.head) break;

      currentNode = currentNode.next;
      idx++;
    }
  }
}
