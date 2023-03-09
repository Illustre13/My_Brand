
let emailExists = async (email)=>{
    let uri = 'http://localhost:3000/users?email='
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
                    name: form.uname.value,
                    email: form.email.value,
                    password: form.confirm_password.value,
                    role:"admin",
                }
                await fetch('http://localhost:3000/users', {
                    method: 'POST',
                    body: JSON.stringify(doc),
                    headers: { 'Content-Type': 'application/json' }
                });
                user_details = {name: form.uname.value,email: form.email.value,password: form.password_001.value, role: 'user'}
                localStorage.setItem('user',JSON.stringify(user_details))
                window.location.replace('/login_page.html');
            }else{
                const doc = {
                    name: form.uname.value,
                    email: form.email.value,
                    password: form.confirm_password.value,
                    role:"user",
                }
                await fetch('http://localhost:3000/users', {
                    method: 'POST',
                    body: JSON.stringify(doc),
                    headers: { 'Content-Type': 'application/json' }
                });
                user_details = {name: form.uname.value,email: form.email.value,password: form.password_001.value, role: 'user'}
                localStorage.setItem('user',JSON.stringify(user_details))
                window.location.replace('/login_page.html');
            }
        }
    }else{
        error_message.innerText = 'Invalid Email'
    }
}
form.addEventListener('submit', createUser);