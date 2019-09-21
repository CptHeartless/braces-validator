/**
 * @class Stack
 * @typeparam {T} - Type of stack values.
 * @constructor {Stack.<T>}
 */
class Stack {
  constructor() {
    /**
     * @private
     * @type {Array<T>}
     */
    this.stack = [];
  }

  /**
   * Pushes the element onto the stack.
   *
   * @param {T} value - Element.
   */
  push(value) {
    this.stack.push(value);
  }

  /**
   * Returns the element on the top of the stack,
   * removing it in the process.
   *
   * @returns {T} - Element.
   */
  pop() {
    return this.stack.pop();
  }

  /**
   * Returns the element on the top of the stack,
   * but does not remove it.
   *
   * @returns {T} - Element.
   */
  peek() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * Tests if this stack is empty.
   * Returns true if the stack is empty,
   * and returns false if the stack contains elements.
   */
  empty() {
    return this.stack.length === 0;
  }
}

module.exports = { Stack };
