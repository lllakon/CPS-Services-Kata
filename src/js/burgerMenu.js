export const burgerMenu = document.querySelector('.burgerMenu')
const burgerMenuBtn = document.querySelector('.navigation__burgerMenu')
const burgerMenuCloseBtn = document.querySelector('.burgerMenu__closeBtn')
const body = document.querySelector('body')

burgerMenuBtn.addEventListener('click', () => {
  burgerMenu.classList.add('burgerMenu--active')
  overlay.classList.add('overlay--active')
  body.classList.add('noScroll')
})

burgerMenuCloseBtn.addEventListener('click', () => {
  burgerMenu.classList.remove('burgerMenu--active')
  overlay.classList.remove('overlay--active')
  body.classList.remove('noScroll')
})
