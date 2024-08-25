const showAllBtn = document.querySelector('.brands__showMoreCards')
const brandCards = document.querySelector('.brands .container')
const showMoreArrow = document.querySelector('.brands__showMoreCards svg')

showAllBtn.addEventListener('click', () => {
  brandCards.classList.toggle('showMore')
  showMoreArrow.classList.toggle('showMore--rotateArrow')
})
