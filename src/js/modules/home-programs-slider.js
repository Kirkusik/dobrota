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

			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true,
			},
		});
	}
}
