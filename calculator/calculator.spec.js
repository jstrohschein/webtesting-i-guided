const { add } = require('./calculator.js');

describe('calculator', () => {
  it('sanity check', () => {
    // this is an actual (empty) test
    expect(2 + 3).toBe(5)
    expect(2 + 2).toBe(4)
  })
})
