export default function menuHandler() {
	const menuToogleBtn = document.querySelector(".menu-toggle");
	const pageNav = document.querySelector(".page-header__nav");

	menuToogleBtn.addEventListener("click", () => {
		pageNav.classList.toggle("page-header__nav--active");
		document.body.classList.toggle("page__body--no-scroll");
	});
}
