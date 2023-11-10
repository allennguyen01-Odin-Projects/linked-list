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
    this.head = null;
  }

  /**
   * append(value) adds a new node containing value to the end of the list
   */
  append(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let currNode = this.head;
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
    if (this.head == null) {
      this.head = newNode;
    } else {
      let next = this.head;
      this.head = newNode;
      this.head.next = next;
    }
  }

  /**

  /**
   * size returns the total number of nodes in the list
   */

  /**
   * head returns the first node in the list
   */

  /**
   * tail returns the last node in the list
   */

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
    let currNode = this.head;
    while (currNode != null) {
      returnString += `(${currNode.value}) -> `;
      currNode = currNode.next;
    }
    return `${returnString}null`;
  }
}

let ll = new LinkedList();
ll.prepend(2);
ll.append(9);
ll.append(3);
ll.append(908);
ll.append(8);
ll.prepend(1);
console.log(ll.toString()); // Outputs: (9) -> (3) -> null
