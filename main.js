// ========== TweenMax ==========

//  Page Loader
var loaderTl = new TimelineMax();
// loaderTl.fromTo("#page-loader", 0.6, {scaleX: 0}, {scaleX: 1}, 0.5)
  loaderTl.to("#page-loader", 0.6, {x:"100%",ease:Expo.easeInOut}, 1)
          .fromTo("#home", 1, {scale: 0.95, opacity: 0, ease:Expo.easeInOut}, {scale: 1, opacity: 1}, 2)

          .from('.nav', 1, {y: -50, opacity: 0, ease:Expo.easeInOut})
          .from("#home .page-title", 1, {opacity: 0, y: 50, ease:Expo.easeInOut}, '-=1')

          .from("#home .page-content", 1, {opacity: 0, y: 50, ease:Expo.easeInOut})
          .to("#home .page-content-cover", 0.4, { scaleX: 0, ease:Expo.easeInOut});



//  Section 1 - Text Animation
// var homeTl = new TimelineMax({delay: 4});

// homeTl.





// init controller
var controller = new ScrollMagic.Controller();


var imgTl = new TimelineMax()
  .add([
        TweenMax.from("#p-1 .page-img-1", 1, {y: 50, ease: Linear.easeNone}),
        TweenMax.from("#p-1 .page-img-2", 1, {y: -100, ease: Linear.easeNone}),
        TweenMax.from("#p-1 .page-img-3", 1, {y: 200, ease: Linear.easeNone})
      ]);

// build scene
var scene = new ScrollMagic.Scene({
          triggerElement: "#p-1",
          offset: 100,
          duration: 800
        })
        .setTween(imgTl)
        // .setTween(TweenMax.from("#p-1 .page-img-1", 1, {y: 100, ease: Linear.easeNone})) // trigger a TweenMax.to tween
        // .setTween(TweenMax.from("#p-1 .page-img-2", 1, {y: 150, ease: Linear.easeNone})) // trigger a TweenMax.to tween
        // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);











// ========== Velocity JS ==========

$('#link-h').click(function(){

  $( '#home' ).velocity("scroll", { 
    // container: $(".page-container"),
    duration: 600,
    delay: 100
  });  
});

$('#link-p1').click(function(){

  $( '#p-1' ).velocity("scroll", { 
    // container: $(".page-container"),
    duration: 600,
    delay: 100
  });  
});
$('#link-p2').click(function(){

  $( '#p-2' ).velocity("scroll", { 
    // container: $(".page-container"),
    duration: 600,
    delay: 100
  });  
});




// ========== Window Scroll Event==========
// $( window ).scroll(function() {

//   // $( "span" ).css( "display", "inline" ).fadeOut( "slow" );
  
// });











// ========== Full Page Scroll ==========
// $(document).ready(function() {
//     $('#fullpage').fullpage();
// });