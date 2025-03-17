export default function serviceDoctorSlider(Swiper) {
	const slider = document.querySelector(".doctor-service__slider");

	if (slider) {
		const swiper = new Swiper(slider, {
			speed: 1000,

			navigation: {
				nextEl: ".doctor-service__slider-btn--next",
				prevEl: ".doctor-service__slider-btn--prev",
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
