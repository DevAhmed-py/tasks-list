import React from 'react'

const Button = ({color, text, onShow}) => {
  return (
    <div>
        <button className='btn' onClick={onShow}
        style={{backgroundColor: color}}> 
          {text} 
        </button>
    </div>
  )
}

export default Button