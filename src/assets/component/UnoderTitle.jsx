import React from 'react'

const UnoderTitle = ({className,text}) => {
  return (
    <div className={`font-mon text-xs leading-5 font-medium my-1 text-black hover:text-one duration-500 ${className}`}>{text}</div>
  )
}

export default UnoderTitle