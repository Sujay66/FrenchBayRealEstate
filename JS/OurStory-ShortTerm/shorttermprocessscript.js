$(document).scroll(function(){
$('#header').toggleClass('scrolled', $(this).scrollTop() > 1);
});
var slideIndex = 1;
showSlides(slideIndex);
    var $doc = $(document),
        $win = $(window),
        // $svg = $('svg').drawsvg(),
        max = $doc.height() - $win.height();
        $trail1 = $('#trail1').drawsvg(),
        $trail2 = $('#trail2').drawsvg(),
        $trail3 = $('#trail3').drawsvg(),
        $trail4 = $('#trail4').drawsvg(),
        $trail5 = $('#trail5').drawsvg(),
        $trail6 = $('#trail6').drawsvg(),

    // $win.on('scroll', function() {
    //   var p1 = ($win.scrollTop()/ max)*6;
    //   var p2 = ($win.scrollTop()/ max)*4.3;
    //   var p3 = ($win.scrollTop()/ max)*3.2;
    //   var p4 = ($win.scrollTop()/ max)*2.6;
    //   var p5 = ($win.scrollTop()/ max)*2.0;
    //   var p6 = ($win.scrollTop()/ max)*1.8;
    //
    //   $trail1.drawsvg('progress', p1);
    //   $trail2.drawsvg('progress', p2);
    //   $trail3.drawsvg('progress', p3);
    //   $trail4.drawsvg('progress', p4);
    //   $trail5.drawsvg('progress', p5);
    //   $trail6.drawsvg('progress', p6);
    // });
    //

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
