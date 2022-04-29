let header = document.querySelector('header')
let main = document.querySelector('.main')
let about = document.querySelector('.about')
let overlay = document.querySelector('.overlay')


function show() {
  header.classList.add('hide')
  main.classList.add('hide')
  overlay.classList.add('hide')
  about.classList.add('show')
}
