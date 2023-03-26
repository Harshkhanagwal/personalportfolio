import React from 'react'
import Typewriter from 'typewriter-effect'

const Typinganimation = () => {
    return (
        <>
            <span class="typing-bx">
                <Typewriter
                    options={{

                        autoStart:true,
                        loop:true,
                        delay: 50,
                        strings:[
                            "Frontend Developer",
                            "Programmer",
                            "BCA Student",
                            "Designer"
                        ]
                    }}

                />
            </span>

        </>
    )
}

export default Typinganimation