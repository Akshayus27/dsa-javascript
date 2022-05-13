export class Stack {
  private stack: any[];
  private head: number;
  private capacity: number = 0;

  /**
   * @param size size of the stack
   */ 
  constructor(private readonly size: number) {
    this.stack = new Array(size);
    this.capacity = size;
    this.head = -1;
  }

  /**
   *
   * @returns true if stack is empty
   */
  isEmpty(): boolean {
    return this.head === -1;
  }

  /**
   *
   * @returns true if stack is full
   */
  isFull(): boolean {
    return this.head === this.capacity - 1;
  }

  /**
   *
   * @param item
   * @returns item that is pushed to stack
   */
  push(item: any): any {
    if (this.isFull()) {
      console.warn('Stack is full');
      process.exit(0);
    }
    this.stack.push(item);
    this.head++;

    return item;
  }

  /**
   * @returns item popped from stack
   */
  pop(): any {
    if (this.isEmpty()) {
      console.warn('Stack is empty');
      process.exit(0);
    }
    this.head--;
    return this.stack[this.head + 1];
  }

  /**
   * @returns top item from stack
   */ 
  peek(): any {
    if (this.isEmpty()) {
      console.warn('Stack is empty to peek');
      process.exit(0);
    }
    return this.stack[this.head];
  }
}
