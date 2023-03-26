import React from 'react'

const Rightbar = () => {
    return (
        <div className="bar-area-right"  data-aos="fade-up" data-aos-duration="2000">
            <div className="emailarea">
                <a href = "mailto: harshkhanagwall29@gmail.com"><span className='b-txt'>harshkhanagwall29@gmail.com</span></a>
            </div>
            <div className="r-bar">

            <svg width="10" height="452" viewBox="0 0 10 452" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 443.575L6 7.57541H4L5 443.575Z" fill="url(#paint0_linear_15_34)" />
                <ellipse cx="5" cy="6.31285" rx="5" ry="6.31285" transform="matrix(1 0 0 -1 0 12.6257)" fill="#F102FF" />
                <defs>
                    <linearGradient id="paint0_linear_15_34" x1="5" y1="452" x2="5" y2="7.57541" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4953F3" />
                        <stop offset="1" stop-color="#F301FF" />
                    </linearGradient>
                </defs>
            </svg>
            </div>


        </div>
    )
}

export default Rightbar