import { burgerMenu } from './burgerMenu'
import { overlay } from './overlay'
export const call = document.querySelector('.call')
const callBtns = document.querySelectorAll('.callBtn')
const modalCloseBtn = document.querySelector('.call__closeBtn')
const body = document.querySelector('body')

callBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    call.classList.add('modalWindow--active')
    overlay.classList.add('overlay--active')
    body.classList.add('noScroll')

    if (burgerMenu.classList.contains('burgerMenu--active')) {
      burgerMenu.classList.remove('burgerMenu--active')
    }
  })
})

modalCloseBtn.addEventListener('click', () => {
  call.classList.remove('modalWindow--active')
  overlay.classList.remove('overlay--active')
  body.classList.remove('noScroll')
})
