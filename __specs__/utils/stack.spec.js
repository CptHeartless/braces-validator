const Utils = require('../../src/utils');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Utils.Stack();
  });

  test('initializing empty array as stack', () => {
    expect(stack.stack).toEqual([]);
  });

  test('.push()', () => {
    stack.push(1);
    stack.push({ a: 1 });
    stack.push('string');

    expect(stack.stack).toEqual([1, { a: 1 }, 'string']);
  });

  test('.pop()', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.stack).toEqual([]);
  });

  test('.peek()', () => {
    stack.push(2);
    stack.push(1);

    expect(stack.peek()).toBe(1);
    expect(stack.stack).toEqual([2, 1]);
  });

  test('.empty()', () => {
    expect(stack.empty()).toBe(true);

    stack.push(1);
    expect(stack.empty()).toBe(false);

    stack.pop();
    expect(stack.empty()).toBe(true);
  });
});
