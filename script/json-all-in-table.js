// javascript for index.html
// javascript for index.html
const container = document.querySelector('.all_blogs');
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
    let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';
    if (term) {
        uri += `&q=${term}`;
    }
    const res = await fetch(uri);
    const posts = await res.json();
    let template = '';
    posts.forEach(post => {
        template += `
            <div class="blog_holder">
                <div class="img_sctn">
                <img src="${post.base64}" alt="article_image">
                </div>
                <div class="ah_001">
                    <h3><a href="/json_details.html?id=${ post.id }">${post.title}</a></h3>
                
                    <p>${post.body.slice(0, 50)}<a href="/json_details.html?id=${ post.id }">...Read more</a></p>
                    <div class="ah_misc">
                        <div class="category">
                            <p>${post.category}</p>                        
                        </div>
                        <div class="read_date">
                            <p><i class="fa-solid fa-clock"></i> 3 min reads</p>
                            <p><i class="fa-solid fa-calendar"></i> 25 November 2022</p>
                        </div>
                    </div>
                    <div class="controller">
                        <button class="delete" onclick="deleteBtn()">Delete </button>
                        <button>Edit</button>
                    </div>
                    
                </div>
            </div>
        `
    })
    container.innerHTML = template;
}



searchForm.addEventListener('submit', e => {
    e.preventDefault();
    renderPosts(searchForm.admin_search.value.trim())
})

window.addEventListener('DOMContentLoaded', () => renderPosts());

function deleteBtn(){
    const deleteBtn = document.querySelector('.delete');
    deleteBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:3000/posts/${id}`, {
            method: 'DELETE'
        });
        window.location.replace('/dashboard.html');
    })
}