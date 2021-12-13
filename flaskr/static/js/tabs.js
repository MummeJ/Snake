// import { speed } from ./new-main.js
const slow = document.getElementById('slow')
const medium = document.getElementById('medium')
const fast = document.getElementById('fast')

medium.style.backgroundColor = '#999'
fast.style.backgroundColor = 'transparent'
slow.style.backgroundColor = 'transparent'

slow.addEventListener('click', () => {
  speed = 6;
  medium.style.backgroundColor = 'transparent'
  fast.style.backgroundColor = 'transparent'
  slow.style.backgroundColor = '#999'
})
medium.addEventListener('click', () => {
  speed = 8;
  medium.style.backgroundColor = '#999'
  fast.style.backgroundColor = 'transparent'
  slow.style.backgroundColor = 'transparent'
})
fast.addEventListener('click', () => {
  speed = 12;
  medium.style.backgroundColor = 'transparent'
  fast.style.backgroundColor = '#999'
  slow.style.backgroundColor = 'transparent'
})
