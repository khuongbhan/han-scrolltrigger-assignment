// Pin hero to create parallax effect

ScrollTrigger.create({
    trigger: "#index-hero",
    pin: true,
    start: "5% top",
    pinSpacing: false,
    markers: true,
    scrub: true
});