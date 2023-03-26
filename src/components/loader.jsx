import React from 'react'
import '../style/loader.css'

const Loader = () => {
    return (
        <>
            <div className="loader-area">
                <span className="g-txt loader-txt">compiling</span>
                <div className="colorbar-loading">

                </div>
            </div>
        </>
    )
}

export default Loader