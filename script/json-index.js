// javascript for index.html
const container = document.querySelector('.recent_blog');
const searchForm = document.querySelector('.search');
const editor_pick = document.querySelector('.ed_leaf_json');
const side_popular_post = document.querySelector('.side_popular_json');
const blog_my_brand_var = document.querySelector('.bs_recent_blog');

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
            <div class="article_holder">
                <img src="${post.image}" alt="article image"/>
                
                <div class="ah_001">
                    <h3><a href="/json_details.html?id=${ post.id }">${post.title}</a></h3>
                   
                    <p>${post.content.slice(0, 200)}</p>
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

    /* Generating the Editor's Pick Section Content*/
    let editor = '';
    posts.forEach(post => {
        editor += `
        <div class="ed_leaf">
            <div class="ed_img">
            <img src="${post.image}" alt="Editor's pick image"/>
            </div>
            <div class="ah_misc">
                <div class="hashtags">
                <p>${post.category}</p>
                </div>
                <div class="read_date">
                <p><i class="fa-solid fa-clock"></i> 3 min reads</p>
                </div>
            </div>
            <div class="ed_header">
                <h3><a href="/json_details.html?id=${ post.id }">${post.title}</a></h3>
            </div>
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
    /* Generating the Popular Post's  Section Content*/
    let popular_post = '';
    posts.forEach(post => {
        popular_post += `
        <div class="popular">
                <img src="/images/a.jpg" alt="Popular_Posts" />
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
    /* Recent blog section on my brand main page*/ 
    let blog_my_brand = '';
    posts.forEach(post => {
        blog_my_brand += `
            <div class="article_holder">
                <img src="${post.image}" alt="article image"/>
                
                <div class="ah_001">
                    <h3><a href="/json_details.html?id=${ post.id }">${post.title}</a></h3>
                   
                    <p>${post.content.slice(0, 200)}</p>
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

    /**/

    side_popular_post.innerHTML = popular_post;
    editor_pick.innerHTML = editor;
    container.innerHTML = template;
    blog_my_brand_var.innerHTML = blog_my_brand;
}

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    renderPosts(searchForm.admin_search.value.trim())
})
window.addEventListener('DOMContentLoaded', () => renderPosts());
