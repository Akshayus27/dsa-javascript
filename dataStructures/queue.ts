export class Queue {
  private queue: any[];
  private front: number;
  private rear: number;
  private size: number;

  /**
   * @param size size of the queue
   */
  constructor(size: number) {
    this.queue = new Array(size);
    this.size = size;
    this.front = -1;
    this.rear = -1;
  }

  /**
   * 
   * @returns true if queue is empty
   */
  public isEmpty(): boolean {
    return this.front === this.rear;
  }

  /**
   * 
   * @returns true if queue is full
   */
  public isFull(): boolean {
    return this.front === (this.rear + 1) % this.size;
  }

  /**
   * 
   * @param item 
   * @returns item that is pushed to queue 
   */
  public enqueue(item: any): void {
    if (this.isFull()) {
      console.warn('Queue is full');
      process.exit(0);
    }
    if (this.front === -1) this.front++;

    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = item;

    return item;
  }

  /**
   * 
   * @returns item that is popped from queue
   */
  public dequeue(): void {
    if (this.isEmpty()) {
      console.warn('Queue is Empty');
      process.exit(0);
    }
    this.front = (this.front + 1) % this.size;

    return this.queue[this.front - 1];
  }

  /**
   * 
   * @returns item that is from the top of the queue
   */
  public peek(): number {
    if (this.isEmpty()) {
      console.warn('Queue is empty to peek');
      process.exit(0);
    }
    return this.queue[this.front];
  }
}
