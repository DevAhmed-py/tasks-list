import React from 'react'
import Button from './Button'

const Header = ({title, onShow, showAddTask}) => {
  return (
    <div>
        <header className='header'>
            <h1> {title} </h1>
            <Button onShow= {onShow} 
            color={showAddTask ? 'red' : 'green'} 
            text={showAddTask ? 'Close' : 'Add'} />
        </header>
    </div>
  )
}

export default Header