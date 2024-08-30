const infoText = document.querySelector('.info__text')
const showMoreBtn = document.querySelector('.info__readMore')
const showMoreBtnText = document.querySelector('.info__readMore p')
const readMoreArrow = document.querySelector('.info__readMore svg')

showMoreBtn.addEventListener('click', () => {
  infoText.classList.toggle('showMore')
  readMoreArrow.classList.toggle('showMore--rotateArrow')
  showMoreBtnText.textContent !== 'Скрыть'
    ? (showMoreBtnText.textContent = 'Скрыть')
    : (showMoreBtnText.textContent = 'Читать далее')
})
