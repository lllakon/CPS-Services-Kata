const infoText = document.querySelector('.info__text')
const showMoreBtn = document.querySelector('.info__readMore')
const readMoreArrow = document.querySelector('.info__readMore svg')

showMoreBtn.addEventListener('click', () => {
  infoText.classList.toggle('showMore')
  readMoreArrow.classList.toggle('showMore--rotateArrow')
})
