export default function createEquipSlider(Swiper) {
	const slider = document.querySelector("#equip-gallery");

	if (slider) {
		const swiper = new Swiper(slider, {
			// Default parameters
			slidesPerView: 3,
			spaceBetween: 0,
			speed: 1000,
			loop: true,
			autoplay: true,

			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},

				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},

				992: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			},
		});
	}
}
