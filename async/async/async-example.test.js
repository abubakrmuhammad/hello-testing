import { expect, it } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('(callback) should return a token value', (done) => {
  const userEmail = "test@testing.com";

  generateToken(userEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      // expect(token).toBe(3);

      done();
    } catch (error) {
      done(error);
    }
  })
});

it('(promise) should return a token value', () => {
  const userEmail = "test@testing.com";

  expect(generateTokenPromise(userEmail)).resolves.toBeDefined();
})

it('(promise) should return a token value', async () => {
  const userEmail = "test@testing.com";

  const token = generateTokenPromise(userEmail);

  expect(token).resolves.toBeDefined();
})