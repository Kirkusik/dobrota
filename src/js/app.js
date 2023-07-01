import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import createHomeProgramsSlider from "./modules/home-programs-slider";
import createHomeReviewsSlider from "./modules/home-reviews-slider";
import menuHandler from "./modules/menu-handler";
import createHomeBannerSlider from "./modules/home-banner-slider";
import createReviewServiceSlider from "./modules/reviews-service";
import createMoreServicesSlider from "./modules/more-services";
// import AOS from "aos";

// AOS.init({
//     duration: 300,
// });
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

document.addEventListener("DOMContentLoaded", function (event) {
    createHomeProgramsSlider(Swiper);
    createHomeReviewsSlider(Swiper);
    createHomeBannerSlider(Swiper);
    createReviewServiceSlider(Swiper);
    createMoreServicesSlider(Swiper);
    menuHandler();
});
