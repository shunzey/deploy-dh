var text = require('./text')

window.addEventListener('load', () => {
  var p = document.querySelector('#content')
  p.innerHTML = text.num2text(text.random5())
})