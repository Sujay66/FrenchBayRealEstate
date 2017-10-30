function checkCookie()
{
  // Check browser support
if (typeof(Storage) !== "undefined") {

   // Retrieve
    var usr = localStorage.getItem("FrenchBayRealEstateCookie");

   if(usr != null)
    {

    }
    else
    {
       // Store
        localStorage.setItem("FrenchBayRealEstateCookie", "True");
        homepopup();
    }

} else {
    homepopup();
}

}

        function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
        }

        function setCookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
        $(document).scroll(function(){
        $('#header').toggleClass('scrolled', $(this).scrollTop() > 1);
        });


function openPage(element,evt, pageName) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {

        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].style.textDecoration = "none";
    }
    document.getElementById(pageName).style.display = "block";
    element.style.textDecoration = "underline";
}


// $(document).scroll(function(){
//      $('#navbar').toggleClass('scrolled', $(this).scrollTop() > 1);
//     });
//
//  var slideIndex = 1;
//     showSlides(slideIndex);
//
//     function plusSlides(n) {
//       showSlides(slideIndex += n);
//     }
//
//     function currentSlide(n) {
//       showSlides(slideIndex = n);
//     }
//
//     function showSlides(n) {
//       var i;
//       var slides = document.getElementsByClassName("mySlides");
//       var dots = document.getElementsByClassName("dot");
//       if (n > slides.length) {slideIndex = 1}
//       if (n < 1) {slideIndex = slides.length}
//       for (i = 0; i < slides.length; i++) {
//           slides[i].style.display = "none";
//       }
//       for (i = 0; i < dots.length; i++) {
//           dots[i].className = dots[i].className.replace(" active", "");
//       }
//       slides[slideIndex-1].style.display = "block";
//       dots[slideIndex-1].className += " active";
//     }
