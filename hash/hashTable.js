const DoublyLinkedList = require('../linkedList/doublyLinkedList');

module.exports = class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  /**
   * 
   * @param {String|Number|Object} key 
   * @returns {Number}
   */
  hash(key) {
    return key % this.size;
  }

  /**
   * insert the value to the key into the hash table
   * @param {Number} key 
   */
  insert(key) {
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

  /**
   * prints the value in each double linked list
   */
  print() {
    for (let i = 0; i < this.size; i++) {
      if (this.buckets[i]) {
        this.buckets[i].printList();
      }
    }
  }
};
