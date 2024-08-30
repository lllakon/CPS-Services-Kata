const showAllBtn = document.querySelector('.brands__showMoreCards')
const brandCards = document.querySelector('.brands .container .swiper')
const showMoreArrow = document.querySelector('.brands__showMoreCards svg')
const showMoreText = document.querySelector('.brands__showMoreCards p')

showAllBtn.addEventListener('click', () => {
  brandCards.classList.toggle('showMore')
  showMoreArrow.classList.toggle('showMore--rotateArrow')
  showMoreText.textContent !== 'Скрыть'
    ? (showMoreText.textContent = 'Скрыть')
    : (showMoreText.textContent = 'Показать все')
})
