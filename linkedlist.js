class Node {
  /**
   * containing a value property and a link to the nextNode, set both as null by default.
   */
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  /**
   * which will represent the full list.
   */
  constructor() {
    this.llHead = null;
  }

  /**
   * append(value) adds a new node containing value to the end of the list
   */
  append(value) {
    let newNode = new Node(value);
    if (this.llHead == null) {
      this.llHead = newNode;
    } else {
      let currNode = this.llHead;
      while (currNode.next != null) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }
  }

  /**
   * prepend(value) adds a new node containing value to the start of the list
   */
  prepend(value) {
    let newNode = new Node(value);
    if (this.llHead == null) {
      this.llHead = newNode;
    } else {
      let next = this.llHead;
      this.llHead = newNode;
      this.llHead.next = next;
    }
  }

  /**
   * size returns the total number of nodes in the list
   */
  size() {
    let size = 0;
    let currNode = this.llHead;
    while (currNode !== null) {
      size++;
      currNode = currNode.next;
    }

    return size;
  }

  /**
   * head returns the first node in the list
   */
  head() {
    return this.llHead;
  }

  /**
   * tail returns the last node in the list
   */
  tail() {
    let currNode = this.llHead;
    if (currNode === null) return currNode;

    while (currNode.next !== null) {
      currNode = currNode.next;
    }

    return currNode;
  }

  /**
   * at(index) returns the node at the given index
   */

  /**
   * pop removes the last element from the list
   */

  /**
   * contains(value) returns true if the passed in value is in the list and otherwise returns false.
   */

  /**
   * find(value) returns the index of the node containing value, or null if not found.
   */

  /**
   * toString represents your LinkedList objects as strings,
   * so you can print them out and preview them in the console.
   * The format should be: ( value ) -> ( value ) -> ( value ) -> null
   * */
  toString() {
    let returnString = '';
    let currNode = this.llHead;
    while (currNode != null) {
      returnString += `(${currNode.value}) -> `;
      currNode = currNode.next;
    }
    return `${returnString}null`;
  }
}

module.exports = LinkedList;
