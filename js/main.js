$('a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    var target = this.hash,                                     // takes '#' of 'a href'
        $target = $(target);                                     // targets '#' of 'a href'

    $('html, body').animate({                                 // animate method on the body
        scrollTop: $target.offset().top - 80         // scrolltop animate method smooth scroll to corresponding 'a href' #
    }, 900)                                                               // .top 116 for fixed nav bar. 900 for scroll speed in millisec
});


$(function() {
        $('.product').flickity({
            cellAlign: 'center',
            contain: true,
            percentPosition: true,
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


// $('#singup-form').on('submit', function(event) {
//       event.preventDefault();

//         var sEmail = $('.email').val();

//         if ($('.email').val() == 0) {

//             alert('Please enter valid email address');
//             e.preventDefault();
//         }
//         if (validateEmail(sEmail)) {
//             alert('Email is valid');
//         }
//         else {
//             alert('Invalid Email Address');
//             e.preventDefault();
//         }
// });

