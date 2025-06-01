import React from 'react'

const ButtonOne = ({text,className}) => {
  return (
    <div className={`px-4 py-2 rounded-full text-sm font-mon font-normal cursor-pointer
        ${className}`}>{text}</div>
  )
}

export default ButtonOne