import { vi, it, expect } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io';

vi.mock('fs');
vi.mock('path', () => ({
  default: {
    join: (...args) => args.at(-1),
  },
}));

it('should write to file', () => {
  const testData = 'hello';
  const testFileName = 'test.txt';

  // expect(writeData(testData, testFileName)).resolves.toBeUndefined();

  writeData(testData, testFileName);

  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});
