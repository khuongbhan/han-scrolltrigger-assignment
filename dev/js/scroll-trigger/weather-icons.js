// Animate weather icons
var animationSpeed = 1;
var weatherTimeline = gsap.timeline();
weatherTimeline.from("#thunder",{duration:animationSpeed, xPercent: -400, rotate:100, alpha:0}, "top")
                .from("#sun",{duration:animationSpeed, yPercent: -100, rotate:360, alpha:0}, "top")
                .from("#wind",{duration:animationSpeed, xPercent: 200, rotate:180, alpha:0}, "bot")
                .from("#snow",{duration:animationSpeed, yPercent: 100, rotate:100, alpha:0}, "bot")
           

ScrollTrigger.create({
    trigger: "#weather-icons",
    start: "top 50%",
    end: "bottom 70%",
    animation: weatherTimeline,
    toggleActions: "play none reverse none"
    // markers: true
});