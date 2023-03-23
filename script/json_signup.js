
let emailExists = async (email)=>{
    let uri = 'https://ith-mybrand-backend.onrender.com/user?email='
    uri += `${email}`
    const res = await fetch(uri)
    const user = await res.json();

    if(user.length === 0){
        return false
    }
    return true
}

let error_message = document.getElementById('error_message');
const form = document.getElementById('signUpForm');
const createUser = async (e) => {
    e.preventDefault();
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(form.email.value.match(validRegex)){
        let emExists = await emailExists(form.email.value)
        console.log( 'Hey', emExists)
        if (emExists){
            error_message.innerText = 'Email already exists, Go to log in'
        }else{
            
            if(form.email.value == "ndahayosibertin17@gmail.com"){
                const doc = {
                    username: form.uname.value,
                    email: form.email.value,
                    password: form.password.value,
                    rePassword: form.confirm_password.value,
                    role:"Admin",
                }
                await fetch('https://ith-mybrand-backend.onrender.com/signup', {
                    method: 'POST',
                    body: JSON.stringify(doc),
                    headers: { 'Content-Type': 'application/json' }
                });
                user_details = {username: form.uname.value,email: form.email.value,password: form.password.value, rePassword: form.confirm_password.value, role: 'User'}
                localStorage.setItem('user',JSON.stringify(user_details))
                window.location.replace('/login_page.html');
            }else{
                const doc = {
                    username: form.uname.value,
                    email: form.email.value,
                    password: form.password.value,
                    rePassword: form.confirm_password.value,
                    role:"User",
                }
                await fetch('https://ith-mybrand-backend.onrender.com/signup', {
                    method: 'POST',
                    body: JSON.stringify(doc),
                    headers: { 'Content-Type': 'application/json' }
                });
                user_details = {username: form.uname.value,email: form.email.value,password: form.password_001.value,rePassword: form.confirm_password.value, role: 'User'}
                localStorage.setItem('user',JSON.stringify(user_details))
                window.location.replace('/login_page.html');
            }
        }
    }else{
        error_message.innerText = 'Invalid Email'
    }
}
form.addEventListener('submit', createUser);