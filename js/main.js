var stickyNav = $('nav').offset().top;

$(window).scroll(function () {
    if ($(window).scrollTop() > stickyNav) {
        $('nav').addClass('fade-in');
    } else {
        $('nav').removeClass('fade-in');
    }
});

$('.logo').click(function(){
    $( '.navigation' ).toggleClass("hide");
  });