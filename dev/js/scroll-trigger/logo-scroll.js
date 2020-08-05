// Logos fade in on scroll using a timeline

var logosTimeline = gsap.timeline();
logosTimeline.from(".logo",{duration:5, alpha:0});
            

ScrollTrigger.create({
    trigger: ".logo",
    start: "top 70%",
    end: "bottom 50%",
    animation: logosTimeline,
    scrub: 1
});