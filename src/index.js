import text from './text.js'

window.addEventListener('load', () => {
    var p = document.querySelector('#content')
    p.innerHTML = text()
})