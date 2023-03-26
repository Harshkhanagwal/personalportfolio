import React from 'react'
import '../style/bar.css'

import { GoMarkGithub } from 'react-icons/go'
import { GrInstagram, GrLinkedinOption} from 'react-icons/gr'


const Leftbar = () => {
    return (


        <>
            <div className="bar-area"  data-aos="fade-down" data-aos-duration="2000">
                <svg width="10" height="452" viewBox="0 0 10 452" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 8.42511L6 444.425H4L5 8.42511Z" fill="url(#paint0_linear_15_33)" />
                    <ellipse cx="5" cy="445.687" rx="5" ry="6.31285" fill="#F102FF" />
                    <defs>
                        <linearGradient id="paint0_linear_15_33" x1="5" y1="0" x2="5" y2="444.425" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4953F3" />
                            <stop offset="1" stop-color="#F301FF" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="social-icons">
                    <a href="https://github.com/harshkhanagwal" rel="noreferrer"  target={"_blank"}><GoMarkGithub className='b-icon' /></a>
                    <a href="https://www.linkedin.com/in/harshkhanagwal/" rel="noreferrer"  target={"_blank"}><GrLinkedinOption className='b-icon' /></a>
                    <a href="https://www.instagram.com/harsh.khanagwal" rel="noreferrer"  target={"_blank"}><GrInstagram className='b-icon' /></a>
                </div>
            </div>

        </>
    )
}

export default Leftbar