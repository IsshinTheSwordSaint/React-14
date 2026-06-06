import {useState} from 'react';

function Form() {
   const [wypelnione, setWypelnione] = useState(false);
   
    function validateForm() {
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (email !== '' && message !== '') {
            setWypelnione(true);
        }
    };

  return (
    <div>
    <h1>Contact us</h1>
    <form>
        <input id="email" onChange={validateForm} type="email" placeholder="Enter your email" /><br/>
        <textarea id="message" onChange={validateForm} placeholder="Enter your message"></textarea><br/>
        <button type="submit" style={{ display: wypelnione ? '' : 'none' }}>Submit</button>
    </form>
    </div>
  );
}



export default Form;