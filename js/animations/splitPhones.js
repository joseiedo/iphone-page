export default function splitPhones() {
	const tlSplit = gsap.timeline({
		scrollTrigger: {
			trigger: ".third-page",
			start: "-20%",
			end: "10%",
			scrub: true,
		},
	});

	tlSplit.fromTo(".large-phone", { x: "40%" }, { x: "20%" });
	tlSplit.fromTo(".small-phone", { x: "-40%" }, { x: "-20%" }, "<");
	tlSplit.fromTo(
		".product-text-left",
		{ x: 50, opacity: 0 },
		{ opacity: 1, x: 0 },
		"<"
	);
	tlSplit.fromTo(
		".product-text-right",
		{ x: -50, opacity: 0 },
		{ opacity: 1, x: 0 },
		"<"
	);

	gsap.timeline({
		scrollTrigger: {
			trigger: ".third-page",
			pin: true,
			pinSpacing: false,
			start: "0%",
			end: "100%",
		},
	});
}
