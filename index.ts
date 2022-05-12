import { Stack } from './dataStructures/stack';
import { Queue } from './dataStructures/queue';
import { Deque } from './dataStructures/deque';

import { SinglyLinkedList } from './dataStructures/singlyLinkedList';
import { DoublyLinkedList } from './dataStructures/doublyLinkedList';
import { CircularLinkedList } from './dataStructures/circularLinkedList';

const circularLinkedList = new CircularLinkedList();

circularLinkedList.insertFirst(1);
circularLinkedList.insertFirst(2);
circularLinkedList.insertFirst(3);
circularLinkedList.insertLast(4);
circularLinkedList.insert(5, 3);
// circularLinkedList.insertLast(6);
// circularLinkedList.removeFirst();
// circularLinkedList.removeLast();
// circularLinkedList.remove(2);
circularLinkedList.remove(4);
circularLinkedList.printList();
