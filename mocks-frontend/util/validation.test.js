import { describe, it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

describe('validateNotEmpty', () => {
  it('should throw an error if an empty string is provided', () => {
    const testInput = '';

    const validateFn = () => validateNotEmpty(testInput);

    expect(validateFn).toThrow();
  });

  it('should throw an error if a string with only blanks is provided', () => {
    const testInput = '    ';

    const validateFn = () => validateNotEmpty(testInput);

    expect(validateFn).toThrow();
  });

  it('should throw an error with the provided error message', () => {
    const testInput = '';
    const testErrorMessage = 'test';

    const validateFn = () => validateNotEmpty(testInput, testErrorMessage);

    expect(validateFn).toThrow(testErrorMessage);
  });
});
