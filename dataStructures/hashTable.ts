import { listenerCount } from 'process';
import { DoublyLinkedList } from './doublyLinkedList';

export class HashTable {
  private buckets: DoublyLinkedList[];
  constructor(private size: number) {
    this.size = size;
    this.buckets = new Array(size);
  }

  private hash(key: number): number {
    return key % this.size;
  }

  public insert(key: number): void {
    const hashKey = this.hash(key);
    if (!this.buckets[hashKey]) {
      const list = new DoublyLinkedList();
      this.buckets[hashKey] = list;

      list.insertFirst(hashKey);
      list.insertLast(key);
    } else {
      this.buckets[hashKey].insertLast(key);
    }
  }

  public search(key: number): boolean {
    return false;
  }

  public print(): void {
    for (let i = 0; i < this.size; i++) {
      if (this.buckets[i]) {
        this.buckets[i].printList();
      }
    }
  }
}
