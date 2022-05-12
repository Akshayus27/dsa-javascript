class Node {
  constructor(public data: number, public previous: Node | null = null, public next: Node | null = null) {
    this.data = data;
  }
}

export class DoublyLinkedList {
  private head: Node | null;
  private tail: Node | null;

  constructor() {}

  /**
   * @description data is added to the front of the list
   * @param data
   */
  public insertFirst(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      node.previous = null;
      this.head.previous = node;
      this.head = node;
    }
  }

  /**
   * @description data is added to the end of the list
   * @param data
   */
  public insertLast(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
  }

  /**
   * @description data is inserted at the given index
   * @param data
   * @param index
   */
  public insert(data: number, index: number): void {
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
      console.log(`🚀 ~ file: doublyLinkedList.ts ~ line 62 ~ DoublyLinkedList ~ insert`);
      console.warn('Index out of range');
      process.exit(0);
    }
  }

  /**
   * @description data is removed from the front of the list
   */
  public removeFirst(): void {
    if (!this.head) {
      console.log(`🚀 ~ file: doublyLinkedList.ts ~ line 74 ~ DoublyLinkedList ~ removeFirst`);
      console.warn('List is empty');
      process.exit(0);
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }
  }

  /**
   * @description data is removed from the end of the list
   */
  public removeLast(): void {
    if (!this.head) {
      console.log(`🚀 ~ file: doublyLinkedList.ts ~ line 87 ~ DoublyLinkedList ~ removeFirst`);
      console.warn('List is empty');
      process.exit(0);
    }
    const previousNode = this.tail.previous;
    this.tail = previousNode;
    this.tail.next = null;
  }

  /**
   * @description data is removed from the given index
   * @param index
   */
  public remove(index: number): void {
    let currentIdx = 0;
    let currentNode = this.head;

    while (currentNode.next !== null && currentIdx !== index) {
      currentNode = currentNode.next;
      currentIdx++;
    }

    if (currentIdx === index) {
      if (currentNode.next === null) {
        this.tail = currentNode.previous;
        this.tail.previous = currentNode.previous.previous;
        this.tail.next = null;
      } else {
        currentNode.previous.next = currentNode.next;
        currentNode.next.previous = currentNode.previous;
      }
    } else {
      console.log(`🚀 ~ file: doublyLinkedList.ts ~ line 119 ~ DoublyLinkedList ~ remove`);
      console.warn('Index out of range');
      process.exit(0);
    }
  }

  /**
   * @description prints the data of the linked list
   */
  public printList(): void {
    let currentNode = this.head;
    let idx = 0;

    while (currentNode !== null) {
      if (idx === 0) {
        console.log(`[`);
        console.log(currentNode, ' ,');
        console.log();
      } else if (currentNode.next === null) {
        console.log(currentNode);
        console.log(`]`);
      } else {
        console.log(currentNode, ' ,');
        console.log();
      }
      currentNode = currentNode.next;
      idx++;
    }
  }
}
