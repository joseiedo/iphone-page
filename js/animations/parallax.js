export default function parallax() {
	const tlParallax = gsap.timeline({
		scrollTrigger: {
			trigger: ".sixth-page",
			start: "-25%",
			end: "50%",
			scrub: true,
		},
	});

	tlParallax.fromTo(
		".photo-description",
		{
			y: 0,
		},
		{
			y: -80,
		}
	);

	tlParallax.fromTo(
		".portrait-container",
		{
			y: 0,
		},
		{
			y: -80,
		},
		"<"
	);

	tlParallax.fromTo(
		".phone-video",
		{
			y: 0,
		},
		{
			y: -200,
		},
		"<"
	);
}
