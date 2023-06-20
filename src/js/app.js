import Swiper, { Navigation, Pagination, Autoplay, Grid } from "swiper";
import createHomeProgramsSlider from "./modules/home-programs-slider";
import createHomeReviewsSlider from "./modules/home-reviews-slider";
import menuHandler from "./modules/menu-handler";
// import AOS from "aos";

// AOS.init({
//     duration: 300,
// });
Swiper.use([Navigation, Pagination, Autoplay]);

document.addEventListener("DOMContentLoaded", function (event) {
	createHomeProgramsSlider(Swiper);
	createHomeReviewsSlider(Swiper);

	menuHandler();
});
