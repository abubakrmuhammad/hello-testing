# Testing Basics

## AAA Pattern

1. **A**rrange

```javascript
const input = [1, 2];
```

2. **A**ct

```javascript
const results = fn(input);
```

3. **A**ssert

```javascript
expect(results).toBe(expectedResult);
```

## Some basic methods & props

- `describe()`
- `it()`
- `expect()`
- `expect().toBe()`
- `expect().not.toBe()`

## What should & shouldn't be tested

- Only test your own code.
  - e.g. `fetch()` API
  - Don't test if it works as intended
  - Don't test server-side code implicitly via your client-side code
  - Do test your client-side reaction to different responses & errors
- Don't test third-party code.
- Don't test what you can't change.

## Only test **one thing**

- focus on the essence of a test when arranging
- keep number of `expect()` low

## Async tests

- the `done()` parameter
- `async` test function

## Hooks

- `beforeAll()`
- `beforeEach()`
- `afterAll()`
- `afterEach()`

## Concurrent Tests

- `it.concurrent()`
- `describe.concurrent()`

## Spies

- "Wrappers" around functions or empty replacements for functions that allow you to track if & how a function was called

## Mocks

- A replacement for an API that may provide some test-specific behavior instead
- `__mocks__` folder
- `.mockImplementationOnce()`
- `stubGlobal()`
