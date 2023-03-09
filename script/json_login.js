let e_msg = document.getElementById('error_message')
const form = document.getElementById('logInForm')
console.log("Login Testing");
const loginUser = async (e) => {
    e.preventDefault();
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    if(form.email.value.match(validRegex)){
        let uri = 'http://localhost:3000/users?email='
        uri += `${form.email.value}`
        const res = await fetch(uri)
        const user = await res.json();
        if(user[0]){
            if(user[0].password === form.password.value){
                user_details = {name: user[0].name,email: user[0].email, role: user[0].role}
                localStorage.setItem('user',JSON.stringify(user_details))
                if(user[0].role === 'admin'){
                    window.location.replace('/dashboard.html');
                    e_msg.innerText = 'Admin Account'

                }else{
                    window.location.replace('/main_blog.html');
                    //e_msg.innerText = 'User Account'
                }
            }else{
                e_msg.innerText = 'Incorrect Password'
            }
        }else{
            e_msg.innerText = 'User not registered'
        }
    }else{
        e_msg.innerHTML = "Invalid email"
        
    }
}
form.addEventListener('submit', loginUser);