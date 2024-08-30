const showAllBtn = document.querySelector('.repairsTypes__showMoreCards')
const repairTypesCards = document.querySelector(
  '.repairsTypes .container .swiper'
)
const showMoreArrow = document.querySelector('.repairsTypes__showMoreCards svg')
const showMoreText = document.querySelector('.repairsTypes__showMoreCards p')

showAllBtn.addEventListener('click', () => {
  repairTypesCards.classList.toggle('showMore')
  showMoreArrow.classList.toggle('showMore--rotateArrow')
  showMoreText.textContent !== 'Скрыть'
    ? (showMoreText.textContent = 'Скрыть')
    : (showMoreText.textContent = 'Показать все')
})
