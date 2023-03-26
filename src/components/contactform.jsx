import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactform = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ur697ss', 'template_lyzu907', form.current, 'dqId_d3n9SxxVj2uk')
          .then((result) => {
              alert("Message send");
          }, (error) => {
              alert("something went wrong");
          });
      };

    return (
        <div className='cntct-details form-bx' >
            <span className="contact-heading">
                Send Message
            </span>
            <div className="colorbar op0"></div>
            <form ref={form} onSubmit={sendEmail} id='contact' className="contactform">

                <input type="text" className={`inp-bx ${props.theme}`} name='user_name' placeholder='Enter Your Name' required/>
                <input type="email" className={`inp-bx ${props.theme}`} name='email' placeholder='Enter Your Email' required />
                <input type="text" className={`inp-bx ${props.theme}`} name='phone' placeholder='Phone Number (Optional)' />
                <textarea   rows="30" cols="50" className={`inp-bx msg-bx ${props.theme}`} name='message' placeholder='Type Your Message' form='contact' required />
                <br />
                <input type="submit" className='send-bt' value={'Send'}/>
            </form>

        </div>
    )
}

export default Contactform