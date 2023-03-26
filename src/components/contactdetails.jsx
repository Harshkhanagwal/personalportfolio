import React from 'react'
import { FiMail } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { GrInstagram } from 'react-icons/gr'

const Contactdetails = () => {
    return (
        <div className='cntct-details'>
            <span className="contact-heading">
                Get in Touch
            </span>
            <div className="colorbar"></div>
            <span className="contact-msg">
            Ready to take your project or website to the next level? Let's work together and create something amazing!
            </span>

            <div className="contact-links">
                <div className="contact-link">
                    <a href="mailto:harshkhanagwall29@gmail.com" className='contact-link-dr'>
                        <FiMail className='icon' /><span className='contact-link-lable'>Harshkhanagwall29@gmail.com</span>
                    </a>
                </div>
                <div className="contact-link">
                    <a href="https://linkedin.com/in/harshkhanagwal" className='contact-link-dr'>
                        <AiFillLinkedin className='icon' /><span className='contact-link-lable'>@Harshkhanagwal</span>
                    </a>
                </div>
                <div className="contact-link">
                    <a href="https://www.instagram.com/harsh.khanagwal/" className='contact-link-dr'>
                        <GrInstagram className='icon' /><span className='contact-link-lable'>@Harsh.khanagwal</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contactdetails