const { add } = require('./calculator.js');

describe('learning about tests, assertions and matchers', () => {
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
    expect({}).toEqual({})
    expect([1]).toEqual([1])
  })
})

describe('calculator module', () => {
  // TDD STEP 1 - tests are passing, so write
  // a small test that will not pass
  describe('add function', () => {
    it('adds two numbers', () => {
      expect(add(2, 3)).toBe(5)
      expect(add(2, 2)).toBe(4)
      expect(add(2, -2)).toBe(0)
    })

    it('adds two numbers', () => {
      // stage
      const expectedResult = 5
      // act
      const actualResult = add(2, 3)
      // assert
      expect(actualResult).toBe(expectedResult)
    })

    it('adds any number of numbers')
  })
})
