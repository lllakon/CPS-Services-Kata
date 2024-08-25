const showAllBtn = document.querySelector('.repairsTypes__showMoreCards')
const repairTypesCards = document.querySelector('.repairsTypes .container')
const showMoreArrow = document.querySelector('.repairsTypes__showMoreCards svg')

showAllBtn.addEventListener('click', () => {
  repairTypesCards.classList.toggle('showMore')
  showMoreArrow.classList.toggle('showMore--rotateArrow')
})
