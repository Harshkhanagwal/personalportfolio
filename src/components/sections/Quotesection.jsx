import React from 'react'
import { Globalcontext } from '../../context/context';
import { useContext } from 'react';

import '../../style/quotesec.css'

const Quotesection = () => {

    const { theme } = useContext(Globalcontext);

    return (
        <>
            <section className={'main quotesec ' + theme}>
                <div className="container-c innerquotesec">
                    <div className="quote-icon" data-aos="fade-down" data-aos-duration="2500">
                        <img src="/images/quote.png" className={theme + ' q-icon'} alt="quote icon" />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <span className={"quote " + theme}>
                            Learning is an Habit which gives you the power <br />
                            to make your unpredictable life predictable
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Quotesection