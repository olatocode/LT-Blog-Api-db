/** @format */

const chai = require('chai');
const expect = chai.expect;

const { add, divide } = require('../utils/math');

describe('Math Utils', () => {
  describe('add()', () => {
    it('should add two numbers', () => {
      const result = add(2, 3);
      expect(result).to.equal(5);
    });
  });

  describe('divide()', () => {
    it('should divide two numbers', () => {
      const result = divide(10, 2);
      expect(result).to.equal(3);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(10, 0)).to.throw('Cannot divide by zero');
    });
  });
});
