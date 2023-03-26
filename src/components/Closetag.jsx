import React from 'react'

const Closetag = (props) => {
  return (
    <>
      <span className={`g-txt ${props.size}`}>{`</${props.value}>`}</span>
    </>
  )
}

export default Closetag