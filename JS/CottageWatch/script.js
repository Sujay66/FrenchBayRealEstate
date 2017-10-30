$(document).scroll(function(){
$('#navbaar').toggleClass('scrolled', $(this).scrollTop() > 1);
});


function showAnswer(x , y) {

   var Image = document.getElementById(x);
  	var id= document.getElementById(y);
  	var temp=id.getAttribute("aria-expanded");
  	if(temp==null)
  	{
  		Image.src = '../../IMG/CottageWatchPage/UpArrow.svg';
  	}
  	if(temp == "true")
  	{
  		Image.src = 'IMG/CottageWatchPage/cd-icon-downarrow.svg';
  	}
   else
   {
   		Image.src = 'IMG/CottageWatchPage/UpArrow.svg';
   }

}
