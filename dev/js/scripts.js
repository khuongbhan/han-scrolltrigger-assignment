
// @codekit-prepend "fancyBox.js";
// @codekit-prepend "tinySlider.js";

// @codekit-prepend "main-nav/burger-animation.js";
// @codekit-prepend "main-nav/burger-mouse-events.js";
// @codekit-prepend "main-nav/nav-global.js";
// @codekit-prepend "main-nav/burger-click.js";
// @codekit-prepend "main-nav/nav-scroll.js";
// @codekit-prepend "main-nav/main-nav-click.js";
// @codekit-prepend "scroll-trigger/scroll-trigger-global.js";
// @codekit-prepend "scroll-trigger/alarm-box.js";
// @codekit-prepend "scroll-trigger/weather-icons.js";
// @codekit-prepend "scroll-trigger/hero-img.js";
// @codekit-prepend "scroll-trigger/logo-scroll.js";
// @codekit-prepend "scroll-trigger/nav-blue.js";


$( document ).ready(function() {

   $("#show-form-btn").on("click", function(){
      //console.log("button clicked");

      // hide contact-button-section
      $("#contact-button-section").hide();

      // show form container
      $("#form-container").show();

   });

});

