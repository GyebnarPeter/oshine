// Menu toggle
$(".menu-btn").click( () => {
    $(".desktop-header").slideToggle();
});


// Gallery fade effect
var speed = 400;
$('.main-gallery > a').each( function(item) {
  $(this).delay(item*speed*0.25).animate(
    { 'opacity':'0.5' },speed ).animate(
    { 'opacity':'1' },0.5*speed );
});