import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import createHomeProgramsSlider from "./modules/home-programs-slider";
import createHomeReviewsSlider from "./modules/home-reviews-slider";
import menuHandler from "./modules/menu-handler";
import createHomeBannerSlider from "./modules/home-banner-slider";
import createReviewServiceSlider from "./modules/reviews-service";
import createMoreServicesSlider from "./modules/more-services";
import createOtherDoctorsSlider from "./modules/other-doctors";
// import createEquipSlider from "./modules/equip-slider";
import "fslightbox";
import serviceDoctorSlider from "./modules/service-doctor-slider";
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
	createOtherDoctorsSlider(Swiper);
	// createEquipSlider(Swiper);
	serviceDoctorSlider(Swiper);
	menuHandler();

	document.addEventListener("click", (evt) => {
		if (evt.target.closest(".pop-up-order")) {
			const popUp = document.querySelector(".pop-up-wrapper");
			popUp.classList.add("pop-up-wrapper--active");
			const body = document.body;
			body.classList.add("page__body--no-scroll");

			document.querySelector(".pop-up-close").addEventListener("click", () => {
				popUp.classList.remove("pop-up-wrapper--active");
				body.classList.remove("page__body--no-scroll");
			});
		}
	});
});
