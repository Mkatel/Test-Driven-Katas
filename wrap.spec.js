const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('Returns string if less than number', () => {
    expect(wrap('Lorem ipsum dolor', 20)).to.equal('Lorem ipsum dolor');
  });

  it('Returns wrap string if more than number', () => {
    expect(wrap('Lorem ipsum dolor sit eu amet, elit na', 20)).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na'
    );
  });

  it('Returns unwrapped string if number is 0', () => {
    expect(wrap('Lorem ipsum dolor sit eu amet, elit na', 0)).to.equal(
      'Lorem ipsum dolor sit eu amet, elit na'
    );
  });
});
