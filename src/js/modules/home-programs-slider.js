export default function createHomeProgramsSlider(Swiper) {
	const homeProgramsSlider = document.querySelector(".home-programs__slider");

	if (homeProgramsSlider) {
		const swiper = new Swiper(homeProgramsSlider, {
			// Default parameters
			slidesPerView: 2,
			spaceBetween: 0,
			centeredSlides: true,
			initialSlide: 1,
			loop: true,

			breakpoints: {
				320: {
					slidesPerView: 1,
					centeredSlides: false,
					spaceBetween: 20,
					initialSlide: 0,
				},

				576: {
					slidesPerView: 2,
					centeredSlides: true,
					spaceBetween: 0,
					initialSlide: 1,
				},
			},

			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true,
			},
		});
	}
}
