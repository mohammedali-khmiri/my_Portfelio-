const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const closeIcon = document.querySelector("#close");

hamburger.addEventListener("click", () => {
	menu.classList.toggle("hidden");

	
});
// closeIcon.addEventListener("click", () => {
// 	menu.classList.toggle("hidden");
// 	hamburger.classList.toggle("hidden");
// 	closeIcon.classList.toggle("hidden");
// });
