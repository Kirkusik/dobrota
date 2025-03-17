export default function menuHandler() {
	const menuToogleBtn = document.querySelector(".menu-toggle");
	const pageNav = document.querySelector(".page-header__nav");

	menuToogleBtn.addEventListener("click", () => {
		pageNav.classList.toggle("page-header__nav--active");
		document.body.classList.toggle("page__body--menu-open");

		if (pageNav.classList.contains("page-header__nav--active")) {
			document.querySelector(".menu-item-has-children a").addEventListener(
				"click",
				function subListhandler(evt) {
					evt.preventDefault();
				},
				{ once: true }
			);
		} else {
			document
				.querySelector(".menu-item-has-children a")
				.removeEventListener("click", subListhandler);
		}
	});
}
