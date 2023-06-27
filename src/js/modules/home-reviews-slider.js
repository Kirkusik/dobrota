export default function createHomeReviewsSlider(Swiper) {
	const reviewsSlider = document.querySelector(".home-reviews__slider");

	if (reviewsSlider) {
		const swiper = new Swiper(reviewsSlider, {
			// Default parameters
			// slidesPerView: "auto",
			spaceBetween: 40,
			loop: true,

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
					slidesPerView: "auto",
					spaceBetween: 40,
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
