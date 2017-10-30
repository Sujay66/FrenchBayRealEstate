
$(document).ready(function () {
  var count = 1;

$('#right-holder').click(function() {
   $('#image_slider').fadeOut(300, function(){
     count++;
     if(count>3){
       count = 1;
     }
      $(this).attr('src','../../IMG/HomePage/'+count+'.jpg').bind('onreadystatechange load', function(){
         if (this.complete) $(this).fadeIn(300);
      });
   });
});

$('#left-holder').click(function() {
   $('#image_slider').fadeOut(300, function(){
     count--;
     if(count<1){
       count = 3;
     }
      $(this).attr('src','../../IMG/HomePage/'+count+'.jpg').bind('onreadystatechange load', function(){
         if (this.complete) $(this).fadeIn(300);
      });
   });
});

});

/*  var count = 1;
function mySlide(count){
  var imageCount = 5;     //Change it to your final count
  var Image = document.getElementById("image_slider");
  console.log("Inside my click");

  if(count>imageCount){
    count = imageCount;
  }
  if(count < 1){
    count = 1;
  }
  console.log(count);
  Image.src = '../../IMG/HomePage/'+count+'.jpg'; //Change it to the proper file name
  console.log(Image.src);
}
window.onload = function () {


var rightArrow = document.getElementById("right-holder");
var leftArrow = document.getElementById("left-holder");


leftArrow.onclick = function fun(){
    count--;
  if(count <=0){
    count = 1
  }
  mySlide(count);
}
rightArrow.onclick = function fun1(){
  count++;
  if(count >=5){      //Change it to your count.
    count = 5
  }
  mySlide(count);
}

}
*/
