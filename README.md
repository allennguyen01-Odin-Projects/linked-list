# linked-list

7th project in JavaScript path of The Odin Project.

TOP "Project: Linked Lists": https://www.theodinproject.com/lessons/javascript-linked-lists

## Features

### Classes

1. LinkedList class / factory, which will represent the full list.
2. Node class / factory, containing a value property and a link to the nextNode, set both as null by default.

### Methods

3. `append(value)` adds a new node containing value to the end of the list or to start if list is empty
4. `prepend(value)` adds a new node containing value to the start of the list
5. `size()` returns the total number of nodes in the list
6. `head()` returns the first node in the list
7. `tail()` returns the last node in the list
8. `at(index)` returns the node at the given index or error message if there is no node in the requested index
9. `pop()` removes the last element from the list
10. `contains(value)` returns true if the passed in value is in the list and otherwise returns false
11. `find(value)` returns the index of the node containing value, or null if not found
12. `toString()` returns your LinkedList objects as strings in the format: `( value ) -> ( value ) -> ( value ) -> null`
13. `insertAt(value, index)` that inserts a new node with the provided value at the given index.
14. `removeAt(index)` that removes the node at the given index.
