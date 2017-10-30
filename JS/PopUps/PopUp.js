

function homepopup(){
      var modal = document.getElementById('myModal2');
    var span = document.getElementsByClassName("close-sujay")[0];
    console.log("clicked");
    console.log(modal);
      modal.style.display = "block";
}

function display()
  {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close-sujay")[0];
    console.log("clicked");
    console.log(modal);
      modal.style.display = "block";
      console.log(modal);
  }

function closepopupmain() {
    var modalMain = document.getElementById('myModal2');
    var span = document.getElementsByClassName("close-sujay")[0];
    modalMain.style.display = "none";
  }

  function closepopup() {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close-sujay")[0];
    modal.style.display = "none";

  }

  function modalOperation(){
    var modal = document.getElementById('contactUS');
    modal.onclick = function(){
      if (window.innerWidth < 1200 ){
 /*&& modal.style.display == "block" */
      console.log("works");
      window.scrollTo(0,document.body.scrollHeight);
  }
  else{
    display();
  }
};
    }



// window.onclick = function(event) {
// var modal = document.getElementById("myModal")
// console.log("inside");
//   console.log(event.target);
//     if(event.target == modal)
//     {
//       closepopup();
//     }
//   }
window.onload = function () {

  // Get the modal
  var modal = document.getElementById('myModal');


  var modal2 = document.getElementById('myModal2');
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close-sujay")[0];

  console.log(modal);

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    console.log("clicked");
    console.log(modal);
      modal.style.display = "block";
  }



  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      console.log("inside func");
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it


  window.onclick = function(event) {

      if (event.target == modal) {
          modal.style.display = "none";

      }

  }


}
