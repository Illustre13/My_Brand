
var outImage ="imagenFondo";
var image=new Image();
var srcData;
var test = "Test";
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
			document.getElementById(outImage).src=image.src;
		};
        image.onload = function () {
            console.log("Hello There");
            console.log(srcData);
            const form = document.querySelector('form');
            
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
	else
	{
		    // Not supported
	}
}
// javascript for create.html
// javascript for create.html
/*
    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];

      var fileReader = new FileReader();

      fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64

        var newImage = document.createElement('img');
        newImage.src = srcData;
*/

if(srcData !== undefined){
           
const form = document.querySelector('form');
console.log("Hello There");
console.log(srcData);
const createPost = async (e) => {
    e.preventDefault();
    const doc = {
        title: form.title.value,
        category: form.category.value,
        body: form.body.value,
        likes: 10
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

/*
function imageShow(file){
    const status = document.getElementById('status');
    const image = document.getElementById('image');
    console.log("10");
    if (file.type && !file.type.startsWith('image/')) {
        console.log('File is not an image.', file.type, file);
        return;
      }else{
        document.getElementById('file-selector').addEventListener('change', event => {
            image.src = '';
            status.textContent = '';
            const file = event.target.files[0];
            if (!file.type) {
              status.textContent = 'Error: The File.type property does not appear to be supported on this browser.';
              return;
            }
            if (!file.type.match('image.*')) {
              status.textContent = 'Error: The selected file does not appear to be an image.'
              return;
            }
            const reader = new FileReader();
            reader.addEventListener('change', event => {
              image.src = event.target.result;
            });
            reader.readAsDataURL(file);
          });
      }

}
*/
