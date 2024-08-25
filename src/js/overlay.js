import { feedback } from './feedbackModal'
import { call } from './callModal'
import { burgerMenu } from './burgerMenu'
export let menuActive = false
export const overlay = document.querySelector('#overlay')
const body = document.querySelector('body')

overlay.addEventListener('click', () => {
  overlay.classList.remove('overlay--active')
  body.classList.remove('noScroll')

  if (feedback.classList.contains('modalWindow--active')) {
    feedback.classList.remove('modalWindow--active')
  }
  if (call.classList.contains('modalWindow--active')) {
    call.classList.remove('modalWindow--active')
  }
  if (burgerMenu.classList.contains('burgerMenu--active')) {
    burgerMenu.classList.remove('burgerMenu--active')
  }
})
