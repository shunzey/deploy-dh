const text = require('../src/text')
describe('Module text', () => {
  describe('num2text()', function () {
    test('should return zero when test is given 0', function () {
      expect(text.num2text(0)).toEqual('zero')
    })
    test('should return one when test is given 1', function () {
      expect(text.num2text(1)).toEqual('one')
    })
    test('should return two when test is given 2', function () {
      expect(text.num2text(2)).toEqual('two')
    })
    test('should return two when test is given 3', function () {
      expect(text.num2text(3)).toEqual('three')
    })
    test('should return two when test is given 4', function () {
      expect(text.num2text(4)).toEqual('four')
    })
  })

  describe('random5()', function () {
    test('should return 0-4', function () {
      let r5 = text.random5()
      expect(r5).toBeGreaterThanOrEqual(0)
      expect(r5).toBeLessThan(5)
    })
  })
})