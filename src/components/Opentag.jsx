import React from 'react'

const Opentag = (props) => {
  return (
    <>
      <span className={`g-txt ${props.size}`}>{`<${props.value}>`}</span>
    </>
  )
}

export default Opentag