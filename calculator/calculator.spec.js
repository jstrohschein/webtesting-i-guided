const { add } = require('./calculator.js');

describe('calculator', () => {
  it('sanity check', () => { // the test
    expect(2 + 3).toBe(5) // an assertion
    expect(2 + 2).toBe(4) // another assertion
  })

  test('more sanity check', () => {
    expect(0).not.toBeTruthy()
    expect([]).toBeTruthy()
    expect(5).toBeLessThan(6)
    expect(5).toBeGreaterThan(4)
    expect(undefined).not.toBeDefined()
    expect(null).toBeNull()
    expect(Number('foo')).toBeNaN()
  })
})
