function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
   /* document.getElementById("mySidepanel").style.marginRight = "250px";*/
  }
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
   /* document.getElementById("mySidepanel").style.marginRight= "0";*/
  }
  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function imageClick() {
    document.getElementById("myprofile").classList.toggle("showProfile");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropclick')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('showProfile')) {
          openDropdown.classList.remove('showProfile');
        }
      }
    }
  }