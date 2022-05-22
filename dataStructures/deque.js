module.exports = class Deque {
  deque = [];
  front;
  rear;
  size;

  /**
   *
   * @param size size of the deque
   */
  constructor(size) {
    this.deque = new Array(size);
    this.size = size;
    this.front = -1;
    this.rear = 0;
  }

  /**
   *
   * @returns true if deque is full
   */
  isFull() {
    return (this.front === 0 && this.rear === this.size - 1) || this.front === this.rear + 1;
  }

  /**
   *
   * @returns true if deque is empty
   */
  isEmpty() {
    return this.front === -1;
  }

  /**
   * @description item is inserted at the front of the deque
   * @param item
   */
  insertFirst(item) {
    if (this.isFull()) {
      console.warn('Deque is Overflowing');
      process.exit(0);
    }

    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
    } else if (this.front === 0) {
      this.front = this.size - 1;
    } else {
      this.front--;
    }

    this.deque[this.front] = item;
  }

  /**
   *
   * @description item is inserted at the end of the deque
   * @param item
   */
  insertLast(item) {
    if (this.isFull()) {
      console.warn('Deque is Overflowing');
      process.exit(0);
    }

    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
    } else if (this.rear === this.size - 1) {
      this.rear = 0;
    } else {
      this.rear++;
    }

    this.deque[this.rear] = item;
  }

  /**
   * @description item is removed from the front of the deque
   */
  removeFirst() {
    if (this.isEmpty()) {
      console.warn('Deque is Empty');
      process.exit(0);
    }

    if (this.front === this.rear) {
      this.front = -1;
    } else if (this.front === this.size - 1) {
      this.front = 0;
    } else {
      this.front++;
    }
  }

  /**
   * @description item is removed from the end of the deque
   */
  removeLast() {
    if (this.isEmpty()) {
      console.warn('Deque is Empty');
      process.exit(0);
    }

    if (this.front === this.rear) {
      this.front = -1;
    } else if (this.rear === 0) {
      this.rear = this.size - 1;
    } else {
      this.rear--;
    }
  }
};
