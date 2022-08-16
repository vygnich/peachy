import Swiper, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";

const Header = {
  onLoad() {
    this._init();
  },

  _init() {
    this.sliderWrapper = this.container.querySelector(".swiper");
    if (!this.sliderWrapper) return;

    this.slider = new Swiper(this.sliderWrapper, {
      slidesPerView: 1,
      autoplay: true,
      modules: [Autoplay],
    });
  },
};

export default Header;
