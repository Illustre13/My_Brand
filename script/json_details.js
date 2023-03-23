// javascript for details.html
// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

const renderDetails = async () => {
    const res = await fetch(`https://ith-mybrand-backend.onrender.com/blog/${id}`);
    const post = await res.json();

    const template = `
        <head>
            <title>${post.title}</title>
        </head>
        <h1>${post.title}</h1>
        <div class="category">
        
            <p>${post.category}</p>
        </div>
        <div class="ap_img_section">
            <img src="${post.image}" alt="article_image">
        </div>
        <div class="content_section">
            <p class="ap_content">${post.content}</p>
        </div>
        <div class="add_comment_share_icons">
        <button>Add Comment <i class="fa-solid fa-comment"></i></button>
        <div class="share_icons">
          <p>20</p>
          <i class="fa-regular fa-heart"></i>
          <p>20</p>
          <i class="fa-regular fa-comment"></i>
          <i class="fa-solid fa-square-share-nodes ed"></i>
        </div>
      </div>
      <div class="back">
        <button><a href="main_blog.html">Back To Main Blog Page</a></button>
      </div>
    </div>
    <div class="scrollDown">
      <i
        class="fa-solid fa-angles-up fa-bounce"
        style="--fa-bounce-rebound: 0"
        onclick="window.scrollTo(0,0)"
      ></i>
    </div>
        `
    container.innerHTML = template;
}
deleteBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    await fetch(`https://ith-mybrand-backend.onrender.com/delete_blog/${id}`, {
        method: 'DELETE'
    });
    window.location.replace('/dashboard.html');
})
window.addEventListener('DOMContentLoaded', () => renderDetails());