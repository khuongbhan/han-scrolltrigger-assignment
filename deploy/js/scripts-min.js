$('[data-fancybox="gallery"]').fancybox({}),$(document).ready((function(){console.log($(".slides").hasClass("my-slider")),$(".slides").hasClass("my-slider")&&tns({container:".my-slider",gutter:20,edgePadding:50,controlsPosition:"bottom",navPosition:"bottom"}),$(".slides").hasClass("my-slider-2")?tns({container:".my-slider-2",gutter:20,edgePadding:50,controlsPosition:"bottom",navPosition:"bottom"}):console.log("No TinySlider found!")}));var burgerAnimationTimeLine=gsap.timeline({paused:!0});burgerAnimationTimeLine.addLabel("burgerToDownArrow").to("#burger",{duration:burgerAnimateSpeed,rotation:-90},"animateBurger").to("#bottom-line",{duration:burgerAnimateSpeed,y:-10},"animateBurger").to("#top-line",{duration:burgerAnimateSpeed,y:10},"animateBurger").to("#down-left-arrow",{duration:burgerAnimateSpeed,rotation:55},"createArrow").to("#down-right-arrow",{duration:burgerAnimateSpeed,rotation:-55},"createArrow").addLabel("burgerToDownArrowReverse").addPause().addLabel("downArrowToX").to("#top-line",{duration:burgerAnimateSpeed,rotation:45},"burgerToX").to("#bottom-line",{duration:burgerAnimateSpeed,rotation:-45},"burgerToX").to("#middle-line",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").to("#down-left-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"burgerToX").to("#down-right-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"burgerToX").to("#up-left-arrow",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").to("#up-right-arrow",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").addLabel("downArrowToXReverse").addPause().addLabel("XtoUpArrow").to("#bottom-line",{duration:burgerAnimateSpeed,rotation:0},"upArrow").to("#top-line",{duration:burgerAnimateSpeed,rotation:0},"upArrow").to("#up-left-arrow",{duration:burgerAnimateSpeed,rotation:55,alpha:1},"createUpArrow").to("#up-right-arrow",{duration:burgerAnimateSpeed,rotation:-55,alpha:1},"createUpArrow").addLabel("XtoUpArrowReverse").addPause().addLabel("upArrowToBurger").to("#up-left-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"backToBurger").to("#up-right-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"backToBurger").to("#middle-line",{duration:burgerAnimateSpeed,alpha:1},"backToBurger").to("#top-line",{duration:burgerAnimateSpeed,y:0,rotation:0},"backToBurger").to("#bottom-line",{duration:burgerAnimateSpeed,y:0,rotation:0},"backToBurger").to("#burger",{duration:burgerAnimateSpeed,rotation:0},"backToBurger").addPause(),gsap.set("#up-left-arrow",{transformOrigin:"right center",alpha:0}),gsap.set("#up-right-arrow",{transformOrigin:"right center",alpha:0}),$("#burger").on("mouseenter",(function(){!1===canYouSeeTheMenu?burgerAnimationTimeLine.play("burgerToDownArrow"):burgerAnimationTimeLine.play("XtoUpArrow")})),$("#burger").on("mouseleave",(function(){!1===canYouSeeTheMenu?burgerAnimationTimeLine.reverse("burgerToDownArrowReverse"):burgerAnimationTimeLine.reverse("XtoUpArrowReverse")}));var canYouSeeTheMenu=!1,navHeight=$("#main-nav").outerHeight();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});mainNavTimeline.to("#main-nav",{duration:.25,y:0});var burgerAnimateSpeed=.25;function hideShowMainNav(){console.log("show me the menu!"),console.log(canYouSeeTheMenu+" can you see the menu value"),!1===canYouSeeTheMenu?(burgerAnimationTimeLine.play("downArrowToX"),mainNavTimeline.play(),canYouSeeTheMenu=!0):(console.log("burger click up"),burgerAnimationTimeLine.play("upArrowToBurger"),mainNavTimeline.reverse(),canYouSeeTheMenu=!1)}gsap.set(".lines",{transformOrigin:"center"});var menuBackground=document.querySelector("#main-nav");function reportWindowSize(){console.log("test"),!1===canYouSeeTheMenu&&(console.log("can't see the main nav"),console.log($("#main-nav").outerHeight()),navHeight=$("#main-nav").outerHeight(),gsap.set("#main-nav",{y:-navHeight}))}window.onclick=function(e){e.target==menuBackground&&hideShowMainNav()},window.addEventListener("resize",reportWindowSize),$("#burger").on("click",hideShowMainNav),gsap.registerPlugin(ScrollToPlugin);var scrollItems=["#index-planning","#index-weather"];function scrollIndex(){gsap.to(window,{duration:2,scrollTo:{y:scrollItems[$("#main-nav ul li button").index(this)],offsetY:60}})}console.log(scrollItems[2]),$("#main-nav li button").on("click",hideShowMainNav),$("#main-nav li button").on("click",scrollIndex),gsap.registerPlugin(ScrollTrigger);var clockTimeLine=gsap.timeline();clockTimeLine.from("#card",{duration:2,xPercent:100,alpha:0},"start").from("#clock-icon",{duration:1,alpha:0},"after").from(".card-text",{duration:2,yPercent:400,alpha:0},"after"),ScrollTrigger.create({trigger:"#card",start:"top 60%",end:"bottom 80%",animation:clockTimeLine,toggleActions:"play none none none",markers:!0});var animationSpeed=1,weatherTimeline=gsap.timeline();weatherTimeline.from("#thunder",{duration:animationSpeed,xPercent:-400,rotate:100,alpha:0},"top").from("#sun",{duration:animationSpeed,yPercent:-100,rotate:360,alpha:0},"top").from("#wind",{duration:animationSpeed,xPercent:200,rotate:180,alpha:0},"bot").from("#snow",{duration:animationSpeed,yPercent:100,rotate:100,alpha:0},"bot"),ScrollTrigger.create({trigger:"#weather-icons",start:"top 50%",end:"bottom 70%",animation:weatherTimeline,toggleActions:"play none reverse none"}),ScrollTrigger.create({trigger:"#index-hero",pin:!0,start:"5% top",pinSpacing:!1,markers:!0,scrub:!0});var logosTimeline=gsap.timeline();logosTimeline.from(".logo",{duration:5,alpha:0}),ScrollTrigger.create({trigger:".logo",start:"top 70%",end:"bottom 50%",animation:logosTimeline,scrub:1}),$(document).ready((function(){$("#show-form-btn").on("click",(function(){$("#contact-button-section").hide(),$("#form-container").show()}))}));