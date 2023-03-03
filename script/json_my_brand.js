function cs_send_querry(){
    const form = document.getElementById('cs_send');
    const createQuerry = async (e) => {
        e.preventDefault();
        const doc = {
                        first_name: form.fName.value,
                        last_name: form.lName.value,
                        email: form.email.value,
                        message: form.cs_message.value,
                        
                    }
                    await fetch('http://localhost:3000/querries', {
                        method: 'POST',
                        body: JSON.stringify(doc),
                        headers: { 'Content-Type': 'application/json' }
                    });
             
               }
    
    form.addEventListener('submit', createQuerry);
} 
