// javascript for index.html
// javascript for index.html
const container = document.querySelector('.recent_blog');
const searchForm = document.querySelector('.search');
const editor_pick = document.querySelector('.ed_leaf_json');
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
            <div class="article_holder">
                <img src="${post.base64}" alt="article image"/>
                
                <div class="ah_001">
                    <h3><a href="/json_details.html?id=${ post.id }">${post.title}</a></h3>
                   
                    <p>${post.body.slice(0, 200)}</p>
                    <div class="ah_misc">
                        <div class="hashtags">
                            <p>${post.category}</p>
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

    /* */
    let editor = '';
    posts.forEach(post => {
        editor += `
        <div class="ed_leaf">
            <div class="ed_img">
            <img src="${post.base64}" alt="Editor's pick image"/>
            </div>
            <div class="ah_misc">
                <div class="hashtags">
                <p>${post.category}</p>
                </div>
                <div class="read_date">
                <p><i class="fa-solid fa-clock"></i> 3 min reads</p>
                </div>
            </div>
            <h3><a href="/json_details.html?id=${ post.id }">${post.title}</a></h3>
            <div class="ed_profile">
                <div class="ed_profile_img">
                    <img src="/images/me3.jpg" />
                </div>
                <div class="ed_profile_name">
                    <h3>Bertin NDAHAYO</h3>
                    <p>25 November 2022</p>
                </div>
                <div class="ed_read-more">
                    <div class="circle"></div>
                    <a href="/json_details.html?id=${ post.id }">Read more...</a>
                </div>
            </div>
        </div>
        `
    })
    /* */
    editor_pick.innerHTML = editor;
    container.innerHTML = template;
}

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    renderPosts(searchForm.admin_search.value.trim())
})
window.addEventListener('DOMContentLoaded', () => renderPosts());
