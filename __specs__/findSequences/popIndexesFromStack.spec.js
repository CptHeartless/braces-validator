const { Stack } = require('../../src/utils');
const { popIndexesFromStack } = require('../../src/allSeq');

jest.mock('../../src/utils');

describe('popIndexesFromStack', () => {
  beforeEach(() => {
    Stack.mockClear();
  });

  test('for an empty stack', () => {
    expect(popIndexesFromStack(new Stack())).toEqual([]);
    expect(Stack.mock.instances[0].peek).toBeCalledTimes(1);
    expect(Stack.mock.instances[0].pop).toBeCalledTimes(0);
  });

  test('for non-empty stack', () => {
    const stack = new Stack();
    stack.peek
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(undefined)
      .mockReturnValueOnce(1);

    stack.pop
      .mockReturnValueOnce(['item1', 0])
      .mockReturnValueOnce(['item2', 1])
      .mockReturnValueOnce(['item3', 2])
      .mockReturnValueOnce(['item4', 3]);

    expect(popIndexesFromStack(stack)).toEqual([0, 1, 2]);
    expect(Stack.mock.instances[0].peek).toBeCalledTimes(4);
    expect(Stack.mock.instances[0].pop).toBeCalledTimes(3);
  });
});
