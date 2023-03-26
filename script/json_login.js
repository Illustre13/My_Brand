let e_msg = document.getElementById('error_message')
const form = document.getElementById('logInForm')
console.log("Login Testing");
const loginUser = async (e) => {
    e.preventDefault();


    
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    if(form.email.value.match(validRegex)){
        const user_login = {
            email: form.email.value,
            password: form.password.value,
        }
        
    let response = await fetch('https://ith-mybrand-backend.onrender.com/signin', {
    method: 'POST',
    headers: { Accept: "application/json", "Content-Type": "application/json", },
    //headers: { 'Content-Type': 'application/json' }
    body: JSON.stringify(user_login)
    })

    let data = await response.json();
    
    if(response.status === 200){
        console.log("Logged in Successfully!!!");
        role = `${data.userType}`;
        console.log(role);
        user_details = {email_saved: email,role_saved: role, token_saved: data.accessToken}
        localStorage.setItem('user',JSON.stringify(user_details))
        if(role === 'admin'){
            window.location.replace('/dashboard.html');
            e_msg.innerText = 'Admin Account'

        }else{
            window.location.replace('/main_blog.html');
        }

    } else {
        e_msg.innerText = `${data.message}`;
        console.log(`Error: ${data.message}`);
        // Handle error
    }
    console.log(response);
    // if(user[0]){
    //         if(user[0].password === form.password.value){
                

    //             user_details = {username: user[0].username,email: user[0].email, role: user[0].role}
    //             localStorage.setItem('user',JSON.stringify(user_details))
    //             if(user[0].role === 'Admin'){
    //                 window.location.replace('/dashboard.html');
    //                 e_msg.innerText = 'Admin Account'

    //             }else{
    //                 window.location.replace('/main_blog.html');
    //                 //e_msg.innerText = 'User Account'
    //             }
    //         }else{
    //             e_msg.innerText = 'Incorrect Password'
    //         }
    //     }else{
    //         e_msg.innerText = 'User not registered'
    //     }
    }else{
        e_msg.innerHTML = "Invalid email address"   
    }
}
form.addEventListener('submit', loginUser);