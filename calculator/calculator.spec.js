const { add } = require('./calculator.js');

// test away!

describe('calculator tests', () => {

  describe('add() tests', () => {

    test('should return the sum of 2 numbers', () => {
      expect(add(2,2)).toBe(4);
      expect(add(2,3)).toBe(5);
    })

    test('add() === NaN', () => {
      expect(add()).toBe(NaN)
    })
      
    test('should return something when only one arg is provided', () => {
      const expected = 3;
      const actual = add(3);
      expect(actual).toBe(expected);
    })
    

  })

  describe('subtract() test', () => {

  })
})

/*
Arrange
Act
Assess
*/