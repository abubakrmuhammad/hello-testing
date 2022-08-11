import { describe, expect, it } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a string number to number type', () => {
  const input = '2';

  const result = transformToNumber(input);


  expect(result).toBeTypeOf('number');
  expect(result).not.toBeNaN();
})

describe('should return NaN for non-transformable values', () => {
  it.each([
    ['string'],
    [undefined],
    [{}],
    [NaN]
  ])('%#. for %s', (value) => {

    const result = transformToNumber(value);

    expect(result).toBeNaN();
  });
})