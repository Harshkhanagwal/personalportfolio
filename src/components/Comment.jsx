import React from 'react'

const Comment = (props) => {
  return (
    <span className='comment'>{`// ${props.value}`}</span>
  )
}

export default Comment