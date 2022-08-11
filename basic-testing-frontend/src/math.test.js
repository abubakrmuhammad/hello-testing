import { expect, it } from 'vitest';
import { add } from './math';

it('should summarize all numbers from an array', () => {
  const inputArray = [1, 2, 3];
  const expectedOutput = 6;

  const sum = add(inputArray);

  expect(sum).toBe(expectedOutput);
});

it('should return NaN if any invalid number is provided', () => {
  const inputArray = ['hehe', 2];

  const sum = add(inputArray);

  expect(sum).toBeNaN();
});

it('should return a sum even if inputs are numeric strings', () => {
  const inputArray = ['2', '4'];
  const expectedOutput = 6;

  const sum = add(inputArray);

  expect(sum).toBe(expectedOutput);
});

it('should return 0 if an empty array is passed', () => {
  const inputArray = [];
  const expectedOutput = 0;

  const sum = add(inputArray);

  expect(sum).toBe(expectedOutput);
});

it('should throw an error if no argument is passed', () => {
  const execFn = () => add();

  expect(execFn).toThrow('is not iterable');
});

it('should throw an error if multiple arguments are passed instead of one array', () => {
  const arg1 = 2;
  const arg2 = 4;

  const execFn = () => add(arg1, arg2);

  expect(execFn).toThrow('is not iterable');
})