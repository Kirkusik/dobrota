export default function createReviewServiceSlider(Swiper) {
    const reviewServiceSlider = document.querySelector(
        ".reviews-service__slider"
    );
    if (reviewServiceSlider) {
        const swiper = new Swiper(reviewServiceSlider, {
            grabCursor: true,
            slidesPerView: 1,
            autoplay: true,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            },
        });
    }
}
