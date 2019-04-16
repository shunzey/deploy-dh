let textmap = [
  'zero',
  'one',
  'two',
  'three',
  'four'
]

module.exports = {
  num2text(num) {
    return textmap[num]
  },
  random5() {
    return Math.trunc(Math.random() * 5)
  }
}