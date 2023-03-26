import React from 'react'
import { Link } from 'react-router-dom'


const Logo = () => {
  return (
    <Link to={'/'} className="link">
      <span className="logo g-txt">
        {`<HK/>`}
      </span>
    </Link>
  )
}

export default Logo