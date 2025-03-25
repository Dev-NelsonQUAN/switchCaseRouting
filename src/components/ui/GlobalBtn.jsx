import React from 'react'

const GlobalBtn = ({ textBtn, iconBtn, bg, padding, paddingY, color, gap, rounded }) => {
  return (
    <div className={`${padding} ${paddingY} ${bg} ${color} ${gap} ${rounded} flex items-center cursor-pointer`}>
      {textBtn}
      {iconBtn}
    </div>
  )
}

export default GlobalBtn