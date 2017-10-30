
function loadEngagement() {
   $.load("FAQ.html");
    openPage(this, event, 'Engagement');
}

//openPage(defaultOpen,MouseEvent, 'Photograph');
function openPage(element,evt, pageName, qLowerCase, flag) {

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
    if(flag=='1')
    {
     updateQueryStringParameter(qLowerCase)
    }

}
$(document).scroll(function(){
$('#header').toggleClass('scrolled', $(this).scrollTop() > 1);
});

function updateQueryStringParameter(value) {
 
  if (history.pushState) {
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?q='+value;
    window.history.pushState({path:newurl},'',newurl);
  }
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



$(document).ready(function(){
var q = getParameterByName('q'); // null (absent)
setTimeout(function() {

    var qLowerCase="";
    if(q==null)
    {
         openPage(document.getElementById('marketing'),MouseEvent, 'marketingContent');
    }
    else
    {
    qLowerCase = q.toLowerCase();
     }
    if(qLowerCase=="marketing" || qLowerCase=="marketing")
    {
        

    } else
      if(qLowerCase=="Maintenance" || qLowerCase=="maintenance")
    {

       
    }
    else if(qLowerCase=="Engagement" || qLowerCase=="engagement")
    {
       

    }
    else if(qLowerCase=="Insurance" || qLowerCase=="insurance")
    {
       

    }
    else if(qLowerCase=="Pricing" || qLowerCase=="pricing")
    {
       

    }
    else if(qLowerCase=="Storybook" || qLowerCase=="storybook")
    {

        
    }
    else
    {

        openPage(document.getElementById('marketing'),MouseEvent, 'marketingContent', '', '0' );


    }

    $(document.getElementById(q.toLowerCase())).trigger('click');
    },10);
});
