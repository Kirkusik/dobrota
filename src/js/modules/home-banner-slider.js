export default function createHomeBannerSlider(Swiper) {
	const homeBannerSlider = document.querySelector(".home-intro__slider");

	if (homeBannerSlider) {
		const swiper = new Swiper(homeBannerSlider, {
			// Default parameters
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 1000,
			loop: true,
			autoplay: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},

			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true,
			},
		});
	}
}
