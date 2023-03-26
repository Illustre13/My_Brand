function cs_send_querry(){
    const form = document.getElementById('querryForm');
const createQuerry = async (e) => {
    e.preventDefault();
    
                const doc = {
                    firstname: form.fName.value,
                    lastname: form.lName.value,
                    email: form.email.value,
                    message: form.message.value,
                }
                await fetch('https://ith-mybrand-backend.onrender.com/save_querries', {
                    method: 'POST',
                    body: JSON.stringify(doc),
                    headers: { 'Content-Type': 'application/json' }
                });
                window.history.back()
}
} 
