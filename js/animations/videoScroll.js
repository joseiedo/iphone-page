export default function videoScroll() {
	const tlVideo = gsap.timeline({
		scrollTrigger: {
			trigger: ".fifth-page",
			start: "0%",
			end: "150%",
			scrub: true,
			pin: true,
		},
	});

	tlVideo.fromTo(
		".product-video",
		{ currentTime: 0 },
		{ currentTime: 3, duration: 1 }
	);

	tlVideo.fromTo(
		".product-info-container h3",
		{
			opacity: 0,
		},
		{
			opacity: 1,
			stagger: 0.25,
			duration: 0.5,
		},
		"<"
	);
}
