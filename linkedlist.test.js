const LinkedList = require('./linkedlist');

test('append twice', () => {
  let ll = new LinkedList();
  ll.append(3);
  ll.append(4);

  expect(ll.toString()).toBe('(3) -> (4) -> null');
});

test('prepend first and last', () => {
  let ll = new LinkedList();
  ll.prepend(2);
  ll.append(3);
  ll.append(4);
  ll.prepend(1);

  expect(ll.toString()).toBe('(1) -> (2) -> (3) -> (4) -> null');
});

test('size 0', () => {
  let ll = new LinkedList();

  expect(ll.size()).toBe(0);
});

test('size 4', () => {
  let ll = new LinkedList();
  ll.prepend(2);
  ll.append(3);
  ll.append(4);
  ll.prepend(1);

  expect(ll.size()).toBe(4);
});

test('head of empty ll', () => {
  let ll = new LinkedList();

  expect(ll.head()).toBe(null);
});

test('head of short ll', () => {
  let ll = new LinkedList();
  ll.prepend(2);
  ll.append(3);
  ll.append(4);

  expect(ll.head().value).toBe(2);
});

test('tail of empty ll', () => {
  let ll = new LinkedList();

  expect(ll.tail()).toBe(null);
});

test('tail of short ll', () => {
  let ll = new LinkedList();
  ll.prepend(2);
  ll.append(3);
  ll.append(4);

  expect(ll.tail().value).toBe(4);
});

test('at of empty ll', () => {
  let ll = new LinkedList();

  expect(ll.at(0)).toStrictEqual(Error('Index out of range'));
});

test('at of valid index', () => {
  let ll = new LinkedList();
  ll.append(1);
  ll.append(2);

  expect(ll.at(1).value).toBe(2);
});

test('at of invalid index', () => {
  let ll = new LinkedList();
  ll.append(1);
  ll.append(2);

  expect(ll.at(2)).toStrictEqual(Error('Index out of range'));
});

test('pop empty ll', () => {
  let ll = new LinkedList();

  expect(ll.pop()).toStrictEqual(Error('Nothing to pop'));
});

test('pop once', () => {
  let ll = new LinkedList();
  ll.append(1);
  ll.append(2);
  ll.append(3);
  ll.pop();

  expect(ll.toString()).toBe('(1) -> (2) -> null');
});

test('contains false', () => {
  let ll = new LinkedList();
  ll.append(1);
  ll.append(2);

  expect(ll.contains(3)).toBe(false);
});

test('contains false', () => {
  let ll = new LinkedList();
  ll.append(1);
  ll.append(2);

  expect(ll.contains(2)).toBe(true);
});

test('finds true', () => {
  let ll = new LinkedList();
  ll.append(1);
  ll.append(1);

  expect(ll.finds(1)).toBe(0);
});

test('finds false', () => {
  let ll = new LinkedList();
  ll.append(1);
  ll.append(2);

  expect(ll.contains(3)).toBe(null);
});
