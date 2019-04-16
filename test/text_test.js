let chai = require('chai')
let expect = chai.expect
let should = chai.should();
let text = require('../src/text')
describe('num2text()', function () {
  it('should return zero when it is given 0', function () {
    expect(text.num2text(0)).to.equal('zero')
  })
  it('should return one when it is given 1', function () {
    expect(text.num2text(1)).to.equal('one')
  })
  it('should return two when it is given 2', function () {
    expect(text.num2text(2)).to.equal('two')
  })
  it('should return two when it is given 3', function () {
    expect(text.num2text(3)).to.equal('three')
  })
  it('should return two when it is given 4', function () {
    expect(text.num2text(4)).to.equal('four')
  })
})

describe('random5()', function () {
  it('should return 0-4', function () {
    let r5 = text.random5()
    r5.should.be.at.least(0)
    r5.should.be.at.most(5)
  })
})