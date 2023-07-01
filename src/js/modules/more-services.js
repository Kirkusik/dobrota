export default function createMoreServicesSlider(Swiper) {
    const moreServicesSlider = document.querySelector(".more-services__slider");
    if (moreServicesSlider) {
        const swiper = new Swiper(moreServicesSlider, {
            grabCursor: true,
            slidesPerView: 3,
            spaceBetween: 48,
            autoplay: true,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            },
        });
    }
}
