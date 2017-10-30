//pageChange(pageName,pageLink);
function pageChange(pageName, link){
    console.log("inside pageChange");
    window.open(pageName,"_self");
  //  window.location.href = pageName;

    if(window.onload == true){
        console.log("True");
    }else{
      console.log("False");
    }
/*if(win.onload == true){
  console.log(win);

win.onload = function(){
    //the document is loaded by here, this is probably where you should do your stuff.
  console.log("inside openPageFromPolaroid");
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
    document.getElementById(link).style.display = "block";
    element.style.textDecoration = "underline";
    $(document).scroll(function(){
    $('#header').toggleClass('scrolled', $(this).scrollTop() > 1);
    });
};
}else{
  console.log("window not loaded");
}*/
};
