import React from 'react'

const Subtitle = ({title,className}) => {
  return (
    <div className={`font-mon text-[16px] text-one font-md ${className}`}>{title}</div>
  )
}

export default Subtitle