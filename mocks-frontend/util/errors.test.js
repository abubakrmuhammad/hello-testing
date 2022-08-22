import { describe, it, expect } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
  it('should contain the statusCode, message, and data passed', () => {
    const statusCode = '404';
    const message = 'test';
    const data = { key: 'value' };

    const testError = new HttpError(statusCode, message, data);

    expect(testError.statusCode).toBe(statusCode);
    expect(testError.message).toBe(message);
    expect(testError.data).toBe(data);
  });
});

describe('class ValidationError', () => {
  it('should contain the message passed', () => {
    const message = 'test';

    const testError = new ValidationError(message);

    expect(testError.message).toBe(message);
  });
});
