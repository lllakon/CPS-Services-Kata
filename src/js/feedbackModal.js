import { burgerMenu } from './burgerMenu'
import { overlay } from './overlay'
export const feedback = document.querySelector('.feedback')
const feedbackBtns = document.querySelectorAll('.feedbackBtn')
const feedbackCloseBtn = document.querySelector('.feedback__closeBtn')
const body = document.querySelector('body')

feedbackBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    feedback.classList.add('modalWindow--active')
    overlay.classList.add('overlay--active')
    body.classList.add('noScroll')

    if (burgerMenu.classList.contains('burgerMenu--active')) {
      burgerMenu.classList.remove('burgerMenu--active')
    }
  })
})

feedbackCloseBtn.addEventListener('click', () => {
  feedback.classList.remove('modalWindow--active')
  overlay.classList.remove('overlay--active')
  body.classList.remove('noScroll')
})
