export class Deque {
    private deque: any[];
    private front: number;
    private rear: number;
    private size: number;

    /**
     * 
     * @param size size of the deque
     */
    constructor(size: number) {
        this.deque = new Array(size);
        this.size = size;
        this.front = -1;
        this.rear = 0;
    }

    /**
     * 
     * @returns true if deque is full
     */
    public isFull(): boolean {
        return (this.front === 0 && this.rear === this.size - 1) || (this.front === this.rear + 1);
    }

    /**
     * 
     * @returns true if deque is empty
     */
    public isEmpty(): boolean {
        return this.front === -1;
    }

    /**
     * @description item is inserted at the front of the deque
     * @param item
     */
    public insertFirst(item: any): void {
        if (this.isFull()) {
            console.log(`🚀 ~ file: deque.ts ~ line 24 ~ Deque ~ insertFirst`);
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
    public insertLast(item: any): void {
        if (this.isFull()) {
            console.log(`🚀 ~ file: deque.ts ~ line 42 ~ Deque ~ insertLast`);
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
    public removeFirst(): void {
        if (this.isEmpty()) {
            console.log(`🚀 ~ file: deque.ts ~ line 54 ~ Deque ~ removeFirst`);
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
    public removeLast(): void {
        if (this.isEmpty()) {
            console.log(`🚀 ~ file: deque.ts ~ line 78 ~ Deque ~ removeLast`);
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
}