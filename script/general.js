window.onload = function() {footer()};
function footer(){
    document.getElementById("FOOTER").innerHTML = "<span> © Copyright 2023 | Powered By<strong><a href='#'> ITH</a></strong>";
    
}


      function openTab(evt, tabName) {
        var i, tabcontent, tablinks;

        // Get all elements with class="tab" and hide them
        tabcontent = document.getElementsByClassName("tab");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tab-button" and remove the class "active"
        tablinks = document.getElementsByClassName("tab-button");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
      }
