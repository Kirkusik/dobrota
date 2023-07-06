export default function createOtherDoctorsSlider(Swiper) {
    const otherDoctorsSlider = document.querySelector(".other-doctors__slider");
    if (otherDoctorsSlider) {
        const swiper = new Swiper(otherDoctorsSlider, {
            grabCursor: true,
            slidesPerView: 3,
            autoplay: true,
            spaceBetween: 40,
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
