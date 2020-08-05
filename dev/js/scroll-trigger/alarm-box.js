// Alarm clock box: slide in from right, fade in icon, fade in/slide up text

var clockTimeLine = gsap.timeline();

clockTimeLine.from("#card",{duration:2, xPercent: 100, alpha:0},"start")
            .from("#clock-icon",{duration:1, alpha:0}, "after")
            .from(".card-text",{duration:2, yPercent: 400, alpha:0}, "after");

ScrollTrigger.create({
    trigger: "#card",
    start: "top 60%",
    end: "bottom 80%",
    animation: clockTimeLine,
    toggleActions: "play none none none",
    markers: true
});
