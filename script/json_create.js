let article_id = new URLSearchParams(window.location.search).get("id");

var outImage =document.getElementById("imagenFondo");
var image=new Image();
var srcData;
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
async function call_article() {
  let res = await fetch(`http://localhost:3000/posts/${article_id}`)
  article = await res.json()
form.title.value = article.title;
form.category.value = article.category;
form.body.value = article.body;
form.imagenFondo.src = article.base64;
form.file.value = "Already Uploaded"



}

function preview_2(obj)
{
	if (FileReader)
	{
		var reader = new FileReader();
		reader.readAsDataURL(obj.files[0]);
		reader.onload = function (e) {
//		var image=new Image();
		image.src=e.target.result;
        srcData = e.target.result;
       // console.log(srcData)
		image.onload = function () {
			form.imagenFondo.src=image.src;
		};
        image.onload = function () {
            console.log("HI HI HI");
            console.log(srcData);
            const form = document.querySelector('form');
            form.imagenFondo.src = srcData;
            
            if(article_id !==null){
              const createPost = async (e) => {
                e.preventDefault();
                const doc = {
                    title: form.title.value,
                    category: form.category.value,
                    body: form.body.value,
                    likes: 10, 
                    base64: srcData
                }
                await fetch(`http://localhost:3000/posts/${article_id}`, {
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
                    body: form.body.value,
                    likes: 10, 
                    base64: srcData
                }
                await fetch('http://localhost:3000/posts', {
                    method: 'POST',
                    body: JSON.stringify(doc),
                    headers: { 'Content-Type': 'application/json' }
                });
                window.location.replace('/dashboard.html');
            }
            form.addEventListener('submit', createPost);
            }
            
            
        }
		}

        
            
	}
	else
	{
		    // Not supported
	}
}
