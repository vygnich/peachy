import Swiper, { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "@/shopify/snippets/variant-swatch";

const FeaturedProducts = {
  onLoad() {
    this._init();

  },

  _init() {
    this.sliderWrapper = this.container.querySelector(".swiper");
    if (!this.sliderWrapper) return;

    this._mediaMatchHandler()

  },

  _initSlider(){
    if(this.slider) this.slider.destroy();

    this.slider = new Swiper(this.sliderWrapper, {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      modules: [Pagination],
    });
  },

  _destroySlider(){
    if(!this.slider) return;

    this.slider.destroy();
    this.slider = null;
  },

  _mediaMatchHandler() {
    this.media = window.matchMedia(Shopify.theme.media.md);

    this.media.matches ? this._destroySlider() : this._initSlider()

    this.media.addEventListener("change", (event) =>{
      event.matches ? this._destroySlider() : this._initSlider()
      }
    );
  },
};

export default FeaturedProducts;
