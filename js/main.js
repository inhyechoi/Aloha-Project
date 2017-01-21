$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});


$(function() {
        $('.product').flickity({
            cellAlign: 'center',
            contain: true,
            percentPosition: false,
            imagesLoaded: true,
            autoPlay: true,
            prevNextButtons: false
        });
    })  




$('#signup-form').on('submit', function(event) {
   event.preventDefault();
 	$('input:text').val('');
   if ( $('.email').val() == '' ) {
      alert('Please put a valid email address');
   } else {
      alert('Thanks for subscribing!');
   }
});


