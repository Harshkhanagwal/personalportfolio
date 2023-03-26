import React from 'react'
import Contactdetails from '../contactdetails'
import Contactform from '../contactform'

const contactsection = (props) => {



    return (
        <section className={`contactsec ${props.theme}`}>
            <div className={`contactsec-left ${props.theme}`}>
                <div className="contactsec-cntar">
                    <Contactdetails/>
                </div>
            </div>
            <div className={`contactsec-right ${props.theme}`}>
                <div className="contactsec-cntar">
                    <Contactform theme={props.theme}/>
                </div>
            </div>
        </section>
    )
}

export default contactsection