# Testing Basics

## AAA Pattern

1. **A**rrange

`const input = [1, 2]`

2. **A**ct

`const results = fn(input)`

3. **A**ssert

`expect(results).toBe(expectedResult)`

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

- focus on the essense of a test when arranging
- keep number of `expect()` low