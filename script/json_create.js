  //Create blog authorization
  const retrievedData= localStorage.getItem('user');
  var userData = JSON.parse(retrievedData);
        // const userType = localStorage.getItem('role_saved')
         window.addEventListener('DOMContentLoaded', () => {
            if (userData.role_saved != 'admin'){
                location.replace('./login_page.html')   
            }
            else{
              console.log("Privilege User-- ADMIN!!");
            }

         });
let article_id = new URLSearchParams(window.location.search).get("id");
var outImage =document.getElementById("imagenFondo");
var imageInput = document.getElementById("file-selector");
let imageStored;
var test = "Test";
let article;
//const date_published = new date();
//let date_format = date_published.getday();
let form = document.getElementById("create_blog_form");
//Checking if the article already exist
if(article_id !== null ){
  console.log("BLog ID = "+article_id);
  call_article();
  

}

//Image Upload on cloudinary
async function uploadProcess(imageToUpload) {

  const data = new FormData();
  data.append("file", imageToUpload);
  data.append("upload_preset", "brand_api_upload");
  data.append("cloud_name", "dwbvnslii");

  const Http = new XMLHttpRequest();
  const url = "https://api.cloudinary.com/v1_1/dwbvnslii/image/upload";
  Http.open("POST", url);
  Http.send(data);

  Http.onreadystatechange = (e) => {
      let res = JSON.parse(Http.responseText);
      imageStored = res.url;
  }
}

imageInput.onchange = event => {
  const file = event.target.files[0];
  let image = URL.createObjectURL(file);

  outImage.src = image;
  uploadProcess(file);
}

async function call_article() {
  let res = await fetch(`https://ith-mybrand-backend.onrender.com/blog/${article_id}`)
  article = await res.json()
form.title.value = article.title;
form.category.value = article.category;
form.body.value = article.content;
form.imagenFondo.src = article.image
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // const form = document.querySelector('form');
  //           form.imagenFondo.src = imageStored;
  if(article_id !==null){
    const createPost = async (e) => {
      e.preventDefault();
      const doc = {
          title: form.title.value,
          category: form.category.value,
          content: form.body.value,
          image: imageStored
      }
      await fetch(`https://ith-mybrand-backend.onrender.com/update_blog/${article_id}`, {
          method: 'PUT',
          body: JSON.stringify(doc),
          headers: { 'Content-Type': 'application/json' }
      });
      window.location.replace('/dashboard.html');
  }
  form.addEventListener('submit', createPost);
  }
  else{
    const createPost = async (e) => {
      e.preventDefault();
      const doc = {
          title: form.title.value,
          category: form.category.value,
          content: form.body.value,
          image: imageStored
      }
      await fetch('https://ith-mybrand-backend.onrender.com/create_blog', {
          method: 'POST',
          body: JSON.stringify(doc),
          headers: { 'Content-Type': 'application/json' }
      });
      window.location.replace('/dashboard.html');
  }
  form.addEventListener('submit', createPost);
  }

  
})