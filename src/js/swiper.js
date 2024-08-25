// core version + navigation, pagination modules:
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
// import Swiper and modules styles

// init Swiper:

function detectMobileDevice() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // true for mobile device
    const swiper = new Swiper('.swiper', {
      // configure Swiper to use modules
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true, //включаем поддержку динамических буллетов
        dynamicMainBullets: 2 //максимальное количество отображаемых буллетов
      },
      widht: 304,
      slidesPerView: 'auto'
    })
  } else {
    // false for not mobile device
  }
}

detectMobileDevice()
