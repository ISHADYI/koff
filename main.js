import 'normalize.css'
import './style.scss'
import Navigo from 'navigo';
import { Header } from './modules/Header/Header';
import { Main } from './modules/Main/Main';
import { Footer } from './modules/Footer/Footer';
//==================SWIPER==================
const productSlider = () => {
  Promise.all([
    import('swiper/modules'),
    import('swiper'),
    import('swiper/css')
  ]).then(([{Navigation, Thumbs}, Swiper]) => {
    const swiperThumbnails = new Swiper.default(".product__slider-thumbnails", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper.default(".product__swiper-main", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".product__arrow_next",
        prevEl: ".product__arrow_prev",
      },
      modules: [Navigation, Thumbs],
      thumbs: {
        swiper: swiperThumbnails,
      },
    });
  });
};
//===========================================
const init = () => {
  new Header().mount();
  new Main().mount();
  new Footer().mount();

  productSlider();

  const router = new Navigo("/", { linksSelector: 'a[href^="/"]' });

  router
    .on("/", () => {
      console.log('На главной');
    })
    .on("/favorite", () => {
      console.log('favorite');
    })
    .on("/cart", () => {
      console.log('cart');
    })
    .on("/search", () => {
      console.log('search');
    })
    .on("/category", (obj) => {
      console.log(obj);
      console.log('category');
    })
    .on("/product/:id", (obj) => {
      console.log(obj);
    })
    .on("order", () => {
          new Order().mount(new Main().element);
          console.log("Заказ");
    })
    .notFound(() => {
      console.log(404);
    })

  router.resolve();
};
init();