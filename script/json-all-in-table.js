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
                <p>${post.id}</p>
                <div class="ah_001">
                    <h3><a href="/json_details.html?id=${ post.id }">${post.title}</a></h3>
                   
                    <p>${post.body.slice(0, 200)}</p>
                    <div class="ah_misc">
                        <div class="hashtags">
                            <p>#${post.category}</p>
                            <p>#${post.category}</p>
                        
                        </div>
                        <div class="read_date">
                            <p><i class="fa-solid fa-clock"></i> 3 min reads</p>
                            <p><i class="fa-solid fa-calendar"></i> 25 November 2022</p>
                        </div>
                        <div class="read-more">
                            
                            <a href="/json_details.html?id=${ post.id }">Read more...</a>
                   </div>
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
