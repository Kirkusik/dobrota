export default function createHomeReviewsSlider(Swiper) {
	const reviewsSlider = document.querySelector(".home-reviews__slider");

	if (reviewsSlider) {
		const swiper = new Swiper(reviewsSlider, {
			// Default parameters
			slidesPerView: "auto",
			spaceBetween: 40,
			loop: true,

			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true,
			},
		});
	}
}
