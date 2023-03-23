// javascript for index.html
// javascript for index.html
const container = document.querySelector('.all_blogs');
const searchForm = document.querySelector('.search');
const side_popular_post = document.querySelector('.side_popular_json');
const renderPosts = async (term) => {
    let uri = 'https://ith-mybrand-backend.onrender.com/blog?_order=desc';
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
                <img src="${post.image}" alt="article_image">
                </div>
                <div class="ah_001">
                    <h3><a href="/json_details.html?id=${ post.id }">${post.title}</a></h3>
                
                    <p>${post.content.slice(0, 50)}<a href="/json_details.html?id=${ post.id }">...Read more</a></p>
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
                        <button class="delete" onclick="deleteBtn(${post.id})">Delete </button>
                        <button class="edit" onclick="window.location = '/json_create_blog.html?id=${post.id}'">Edit</button>
                    </div>
                    
                </div>
            </div>
        `
    })
    /* Generating the Popular Post's  Section Content*/
    let popular_post = '';
    posts.forEach(post => {
        popular_post += `
        <div class="popular">
                <img src="/images/me3.jpg" alt="Popular_Posts" />
                <div class="popular_001">
                  <h4>${post.title}</h4>
                  <div class="pp_misc">
                    <div class="pp_share_tags">
                      <div class="pp_hashtags">
                        <p>${post.category}</p>
                      </div>
                      <div class="share_icons">
                        <p>20</p>
                        <i class="fa-regular fa-heart"></i>
                        <p>20</p>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-solid fa-square-share-nodes"></i>
                      </div>
                    </div>
                    <div class="read_date">
                      <p><i class="fa-solid fa-clock"></i> 3 min reads</p>
                      <p>
                        <i class="fa-solid fa-calendar"></i> 25 November 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        `
    })
    /* */
    side_popular_post.innerHTML = popular_post;
    container.innerHTML = template;
}



searchForm.addEventListener('submit', e => {
    e.preventDefault();
    renderPosts(searchForm.admin_search.value.trim())
})

window.addEventListener('DOMContentLoaded', () => renderPosts());

async function deleteBtn(id) {
    
        await fetch(`https://ith-mybrand-backend.onrender.com/delete_blog/${id}`, {
            method: 'DELETE'
        });
    
}

