export default function carousel() {
	const swatches = document.querySelectorAll(".swatches img");
	const gallery = document.querySelector(".phone-gallery");
	const slides = document.querySelectorAll(".phone-gallery-container");

	let topIndex = 2;
	let currentElement = "blue";

	swatches.forEach((swatch, index) => {
		const coord = slides[index].getBoundingClientRect().left;

		swatch.addEventListener("click", (e) => {
			let swatchName = e.target.getAttribute("swatch");
			let closeUp = document.querySelector("." + swatchName);

			if (currentElement === swatchName) {
				return;
			}

			gsap.set(closeUp, {
				zIndex: topIndex,
			});

			gsap.fromTo(
				closeUp,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 1,
				}
			);

			gsap.to(gallery, { x: -coord, duration: 1, ease: "back.out(1.7)" });

			currentElement = swatchName;
			topIndex++;
		});
	});
}
