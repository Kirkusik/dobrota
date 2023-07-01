export default function createMoreServicesSlider(Swiper) {
	const moreServicesSlider = document.querySelector(".more-services__slider");
	if (moreServicesSlider) {
		const swiper = new Swiper(moreServicesSlider, {
			grabCursor: true,
			slidesPerView: 3,
			spaceBetween: 48,
			autoplay: true,

			breakpoints: {
				320: {
					spaceBetween: 20,
					slidesPerView: 1,
				},

				992: {
					spaceBetween: 30,
					slidesPerView: 2,
				},
				1200: {
					spaceBetween: 40,
					slidesPerView: 3,
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
