import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

let swiperInit = false

function detectMobileDevice() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) && window.innerWidth <= 550 ||
    window.innerWidth <= 550
  ) {
    // mobile device
    swiperInit = true
    const swiper = new Swiper('.swiper', {
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicMainBullets: 2
      },
      widht: 304,
      slidesPerView: 'auto'
    })
  }
}

let timer = setTimeout(() => {}, 10)
window.addEventListener('resize', (e) => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    detectMobileDevice()
    if (window.innerWidth >= 550 && swiperInit === true) {
      location.reload()
      swiperInit = false
    }
  }, 120)
})

detectMobileDevice()
