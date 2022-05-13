import * as CircularJSON from 'circular-json';

import { Stack } from './dataStructures/stack';
import { Queue } from './dataStructures/queue';
import { Deque } from './dataStructures/deque';

import { SinglyLinkedList } from './dataStructures/singlyLinkedList';
import { DoublyLinkedList } from './dataStructures/doublyLinkedList';
import { CircularLinkedList } from './dataStructures/circularLinkedList';

import { HashTable } from './dataStructures/hashTable';

const hashTable = new HashTable(5);

hashTable.insert(1);
hashTable.insert(2);
hashTable.insert(3);
hashTable.insert(4);
hashTable.insert(5);
hashTable.insert(6);
hashTable.insert(7);
hashTable.insert(8);
hashTable.insert(9);
hashTable.insert(10);
hashTable.insert(11);
hashTable.insert(12);
hashTable.insert(13);
hashTable.insert(14);
hashTable.insert(15);

hashTable.print();
