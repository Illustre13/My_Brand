
let emailExists = async (email)=>{
    let uri = 'http://localhost:3000/users?email='
    uri += `${email}`
    const res = await fetch(uri)
    const user = await res.json();

    if(user.length === 0){
        return false
    }else{
    return true
    }
  
}

let error_message = document.getElementById('error_message')
//let title = document.getElementById('form_title')
let pswd_001 = document.getElementById("password");
let pswd_002 = document.getElementById("confirm_password");

const form = document.getElementById('signUpForm');

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(form.email.value.match(validRegex)){
      
        if (emailExists(form.email.value)){
           // title.style.marginBottom = '0.5rem'
            error_message.innerText = 'Email already exists, log in'
        }else{
            if(pswd_001 !== pswd_002){
                error_message.innerHTML = 'Password Does not match'
            }else{
                if(form.email.value == "ndahayosibertin17@gmail.com"){
                    const createUser = async (e) => {
                    e.preventDefault();
                    const doc = {
                        name: form.uname.value,
                        email: form.email.value,
                        password: form.password.value,
                        role:"admin",
                    }
                    await fetch('http://localhost:3000/users', {
                        method: 'POST',
                        body: JSON.stringify(doc),
                        headers: { 'Content-Type': 'application/json' }
                    });
                    window.location.replace('/login_page.html');
                }
                form.addEventListener('submit', createUser);
                }else{
                    const createUser = async (e) => {
                        e.preventDefault();
                    const doc = {
                        name: form.uname.value,
                        email: form.email.value,
                        password: form.password.value,
                        role:"user",
                    }
                    await fetch(`http://localhost:3000/users`, {
                        method: 'POST',
                        body: JSON.stringify(doc),
                        headers: { 'Content-Type': 'application/json' }
                    });
                    window.location.replace('/login_page.html');
                }
                form.addEventListener('submit', createUser);

                }
                
            }

        }
    }else{
        error_message.innerText = 'Use a valid Email'
    }
