window.onscroll = function() {myFunction()};
window.onscroll = function() { general_scroll()};
//window.onVisible(document.getElementById("Portofolio"), () => console.log("it's visible"));
//window.onload = function() {home_focus()};
function home_focus(){
  const hf = document.getElementById("front");
  var x_hf = hf.scrollHeight;
  var y_hf = hf.scrollWidth;
  var styles = {
    "color": "#03a9f4",
    "transition" : ".5s ease"
    };
    var obj = document.getElementById("menu001");
      Object.assign(obj.style, styles);
}
function myFunction() {
    var styles = {
        "display": "inline-block",
        "position" :  "fixed",
        "right" : "10",
        "top" : "0",
        "padding" : "10px",
        "font-size" : "40px"
    };
  if (document.documentElement.scrollTop > 100) {
    var obj = document.getElementById("menu_scrolling");
    Object.assign(obj.style, styles);
  } else {

    document.getElementById("menu_scrolling").style.display = "none";
  }
}
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
   /* document.getElementById("mySidepanel").style.marginRight = "250px";*/
  }
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
   /* document.getElementById("mySidepanel").style.marginRight= "0";*/
  }
  

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content 
function imageClick() {
    document.getElementById("mySidepanel").classList.toggle("showProfile");
  }
    // Close the menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.sidepanel')) {
          var dropdowns = document.getElementsByClassName("sidepanel");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showProfile')) {
              openDropdown.classList.remove('showProfile');
            }
          }
        }
      }
      */

      //This function will help us to monitor the scroll of the page
function general_scroll(){
  //Menu Header dimensions
  const menu = document.getElementById("menu_header");
  let x_menu = menu.scrollHeight;
  let y_menu = menu.scrollWidth;
  console.log("Menu: "+ x_menu);
  console.log("Menu: "+ y_menu);

  //Front_page dimensions
      const front = document.getElementById("front");
      let x_front = front.scrollHeight;
      let y_front = front.scrollWidth;
      console.log("Front: "+ x_front);
      console.log("Front: "+ y_front);
      //About Me Dimension
      const about = document.getElementById("ABOUT");
      const timeline = document.getElementById("TIMELINE");
      let x_about_timeline = about.scrollHeight + timeline.scrollHeight;
      let y_about_timeline = about.scrollWidth + timeline.scrollWidth;
      console.log("About: "+ x_about_timeline);
      console.log("About: "+ y_about_timeline);
      //Skills Dimension
    const skill = document.getElementById("SKILLS");
    let x_skill = skill.scrollHeight;
    let y_skill = skill.scrollWidth;
    console.log("Skills: " + x_skill);
    console.log("Skills: " + y_skill);


    //Portofolio Dimension
    const Portofolio = document.getElementById("PORTOFOLIO");
    let x_PORTOFOLIO = Portofolio.scrollHeight;
    let y_PORTOFOLIO = Portofolio.scrollWidth;
    console.log("Portofolio: "+ x_PORTOFOLIO);
    console.log("Portofolio: "+ y_PORTOFOLIO);

      //Blog Dimension
      const Blog = document.getElementById("BLOG");
      let x_Blog = Blog.scrollHeight;
      let y_Blog = Blog.scrollWidth;
      console.log("Blog: "+ x_Blog);
      console.log("Blog: "+ y_Blog);
       //Contacts Dimension
       const Contacts = document.getElementById("CONTACTS");
       let x_Contacts = Contacts.scrollHeight;
       let y_Contacts = Contacts.scrollWidth;
       console.log("Contacts: "+ x_Contacts);
       console.log("Contacts: "+ y_Contacts);
   
       const total = document.getElementById("container");
       let x_total = total.scrollHeight;
       let y_total = total.scrollWidth;
       console.log("Total : "+ x_total);
       console.log("Total: "+ y_total);
       var styles = {
        "color": "#03a9f4",
        "transition" : ".5s ease"
        };
        var opposite = {
         "color": "#ffffff",
         "transition" : ".5s ease"
         };
var key;
if(document.documentElement.scrollTop > (x_about_timeline + x_skill + x_PORTOFOLIO + x_Blog + 200) ){
  key = 5;//Entering the contact region
}else if(document.documentElement.scrollTop > (x_about_timeline + x_skill + x_PORTOFOLIO + 200) ){
  key = 4;//Entering the blog section
}else if(document.documentElement.scrollTop > (x_about_timeline + x_skill + 200)){
key = 3;// Entering the portofolio section
}else if(document.documentElement.scrollTop > (x_about_timeline + 200 )){
 key = 2;//Entering the skills section
}else if(document.documentElement.scrollTop > (200 ) )  {
  key = 1;//Entering the about me section
}else{
  key = 0// Else we will be in the front_page section and the key = 0
}

  switch(key){
    case 0:
      var obj = document.getElementById("menu001");
      Object.assign(obj.style, styles);

        var obj1 = document.getElementById("menu002");
        var obj2 = document.getElementById("menu003");
        var obj3 = document.getElementById("menu004");
        var obj4 = document.getElementById("menu005");
        var obj5 = document.getElementById("menu006");
        Object.assign(obj1.style, opposite);
        Object.assign(obj2.style, opposite);
        Object.assign(obj3.style, opposite);
        Object.assign(obj4.style, opposite);
        Object.assign(obj5.style, opposite);
    break;
    case 1:
      var obj = document.getElementById("menu002");
      Object.assign(obj.style, styles);

        var obj1 = document.getElementById("menu001");
        var obj2 = document.getElementById("menu003");
        var obj3 = document.getElementById("menu004");
        var obj4 = document.getElementById("menu005");
        var obj5 = document.getElementById("menu006");
        Object.assign(obj1.style, opposite);
        Object.assign(obj2.style, opposite);
        Object.assign(obj3.style, opposite);
        Object.assign(obj4.style, opposite);
        Object.assign(obj5.style, opposite);
    break;
    case 2:
      var obj = document.getElementById("menu003");
      Object.assign(obj.style, styles);

        var obj1 = document.getElementById("menu001");
        var obj2 = document.getElementById("menu002");
        var obj3 = document.getElementById("menu004");
        var obj4 = document.getElementById("menu005");
        var obj5 = document.getElementById("menu006");
        Object.assign(obj1.style, opposite);
        Object.assign(obj2.style, opposite);
        Object.assign(obj3.style, opposite);
        Object.assign(obj4.style, opposite);
        Object.assign(obj5.style, opposite);
    break;
    case 3:
      var obj = document.getElementById("menu004");
      Object.assign(obj.style, styles);

        var obj1 = document.getElementById("menu001");
        var obj2 = document.getElementById("menu002");
        var obj3 = document.getElementById("menu003");
        var obj4 = document.getElementById("menu005");
        var obj5 = document.getElementById("menu006");
        Object.assign(obj1.style, opposite);
        Object.assign(obj2.style, opposite);
        Object.assign(obj3.style, opposite);
        Object.assign(obj4.style, opposite);
        Object.assign(obj5.style, opposite);
    break;
    case 4:
      var obj = document.getElementById("menu005");
      Object.assign(obj.style, styles);

        var obj1 = document.getElementById("menu001");
        var obj2 = document.getElementById("menu002");
        var obj3 = document.getElementById("menu003");
        var obj4 = document.getElementById("menu004");
        var obj5 = document.getElementById("menu006");
        Object.assign(obj1.style, opposite);
        Object.assign(obj2.style, opposite);
        Object.assign(obj3.style, opposite);
        Object.assign(obj4.style, opposite);
        Object.assign(obj5.style, opposite);
    break;
    case 5:
      var obj = document.getElementById("menu006");
      Object.assign(obj.style, styles);

        var obj1 = document.getElementById("menu001");
        var obj2 = document.getElementById("menu002");
        var obj3 = document.getElementById("menu003");
        var obj4 = document.getElementById("menu004");
        var obj5 = document.getElementById("menu005");
        Object.assign(obj1.style, opposite);
        Object.assign(obj2.style, opposite);
        Object.assign(obj3.style, opposite);
        Object.assign(obj4.style, opposite);
        Object.assign(obj5.style, opposite);
    break;
    default:
      
    
  }
}
