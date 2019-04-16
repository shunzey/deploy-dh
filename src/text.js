let textmap = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
]

export default function () {
    var i = Math.trunc(Math.random() * 10)
    return textmap[i]
}